var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import Postmate from 'postmate';
import eventHub from '../events/event-hub';
var ChildHandshake = /** @class */ (function () {
    function ChildHandshake(clientId) {
        this.features = [];
        this.clientId = clientId;
    }
    ChildHandshake.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var model, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        model = this.features.reduce(function (result, feature) {
                            var _a;
                            if (!feature.callbackEventType) {
                                return result;
                            }
                            return __assign(__assign({}, result), (_a = {}, _a[feature.callbackEventType] = function (data) {
                                var event = new Event("".concat(data.eventType, "-").concat(data.clientId, "-").concat(data.eventId));
                                event.data = data;
                                eventHub.dispatchEvent(event);
                                if (feature.callbackHandler) {
                                    feature.callbackHandler(data);
                                }
                            }, _a));
                        }, {});
                        _a = this;
                        return [4 /*yield*/, new Postmate.Model(model)];
                    case 1:
                        _a.postmate = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChildHandshake.prototype.addFeature = function (feature) {
        this.features.push(feature);
    };
    ChildHandshake.prototype.handle = function (featureName, params) {
        var feature = this.features.find(function (f) { return f.name === featureName; });
        if (!(feature === null || feature === void 0 ? void 0 : feature.handler)) {
            return;
        }
        return feature.handler(this, params);
    };
    ChildHandshake.prototype.getEventId = function () {
        var rand = Math.random().toString(16).slice(5);
        var ts = new Date().getTime().toString();
        return "".concat(rand, "-").concat(ts);
    };
    /**
     * send data to AdminSDK (one way trigger)
     * @param eventType
     * @param data
     */
    ChildHandshake.prototype.toParent = function (eventType, data) {
        if (!this.postmate) {
            throw new Error('Handshake has not been initialized');
        }
        var eventId = this.getEventId();
        var payload = __assign({ clientId: this.clientId, eventType: eventType, eventId: eventId }, (data || {}));
        this.postmate.emit(eventType, payload);
    };
    /**
     * send data to AdminSDK (round-trip trigger)
     * @param eventType
     * @param data
     */
    ChildHandshake.prototype.requestParent = function (eventType, data) {
        var _this = this;
        if (!this.postmate) {
            throw new Error('Handshake has not been initialized');
        }
        var eventId = this.getEventId();
        var payload = __assign({ clientId: this.clientId, eventType: eventType, eventId: eventId }, (data || {}));
        return new Promise(function (resolve) {
            eventHub.addEventListener("".concat(eventType, "-").concat(_this.clientId, "-").concat(eventId), function (evt) {
                resolve(evt.data);
            }, { once: true });
            _this.postmate.emit(eventType, payload);
        });
    };
    return ChildHandshake;
}());
export { ChildHandshake };
