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
import { getSessionToken as getSessionTokenFeature } from '../features/get-session-token/app-bridge-feature';
import { redirect as redirectFeature } from '../features/redirect/app-bridge-feature';
import { goBack as goBackFeature } from '../features/go-back/app-bridge-feature';
import { oauth as oauthFeature } from '../features/oauth/app-bridge-feature';
import { languageChanged as languageChangedFeature } from '../features/language-changed/app-bridge-feature';
import { getLanguage as getLanguageFeature } from '../features/get-language/app-bridge-feature';
import eventHub from '../events/event-hub';
import { ChildHandshake } from './child-handshake';
import { intercom as intercomFeature } from '../features/intercom/app-bridge-feature';
import { getCurrentUrl as getCurrentUrlFeature } from '../features/get-current-url/app-bridge-feature';
import { notifyAppRouteChanged as notifyAppRouteChangedFeature } from '../features/notify-app-route-changed/app-bridge-feature';
import { changePageTitle as changePageTitleFeature } from '../features/change-page-title/app-bridge-feature';
import { routeChanged as routeChangedFeature } from '../features/route-changed/app-bridge-feature';
import { routeChangeRetry as routeChangeRetryFeature } from '../features/route-change-retry/app-bridge-feature';
import { CallbackEvents } from '../constants/callback-events';
import { routeChangeIntercept as routeChangeInterceptFeature } from '../features/route-change-intercept/app-bridge-feature';
var init = function (options) { return __awaiter(void 0, void 0, void 0, function () {
    var handshake;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                handshake = new ChildHandshake(options.clientId);
                handshake.addFeature(languageChangedFeature);
                handshake.addFeature(getSessionTokenFeature);
                handshake.addFeature(redirectFeature);
                handshake.addFeature(goBackFeature);
                handshake.addFeature(changePageTitleFeature);
                handshake.addFeature(oauthFeature);
                handshake.addFeature(getLanguageFeature);
                handshake.addFeature(intercomFeature);
                handshake.addFeature(getCurrentUrlFeature);
                handshake.addFeature(notifyAppRouteChangedFeature);
                handshake.addFeature(routeChangedFeature);
                handshake.addFeature(routeChangeRetryFeature);
                handshake.addFeature(routeChangeInterceptFeature);
                return [4 /*yield*/, handshake.init()];
            case 1:
                _a.sent();
                return [2 /*return*/, {
                        onLanguageChanged: function (handler) {
                            var cb = function (e) {
                                var _a;
                                handler((_a = e.data) === null || _a === void 0 ? void 0 : _a['language']);
                            };
                            eventHub.addEventListener('shopline:language-changed', cb);
                            var unsubscribeFunction = function () {
                                eventHub.removeEventListener('shopline:language-changed', cb);
                            };
                            return unsubscribeFunction;
                        },
                        getSessionToken: function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, handshake.handle(getSessionTokenFeature.name)];
                            });
                        }); },
                        redirect: function (url) {
                            handshake.handle(redirectFeature.name, { url: url });
                        },
                        goBack: function () {
                            handshake.handle(goBackFeature.name);
                        },
                        changePageTitle: function (title) {
                            handshake.handle(changePageTitleFeature.name, { title: title });
                        },
                        oauth: function () {
                            handshake.handle(oauthFeature.name, { authUrl: options.authUrl });
                        },
                        getLanguage: function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, handshake.handle(getLanguageFeature.name)];
                            });
                        }); },
                        intercom: function () {
                            handshake.handle(intercomFeature.name);
                        },
                        getCurrentUrl: function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, handshake.handle(getCurrentUrlFeature.name)];
                            });
                        }); },
                        notifyAppRouteChanged: function (url) {
                            handshake.handle(notifyAppRouteChangedFeature.name, { url: url });
                        },
                        interceptRouteChange: function (handler) {
                            var cb = function (e) {
                                var _a, _b;
                                var event = e;
                                handler((_a = event === null || event === void 0 ? void 0 : event.data) === null || _a === void 0 ? void 0 : _a['from'], (_b = event === null || event === void 0 ? void 0 : event.data) === null || _b === void 0 ? void 0 : _b['to']);
                            };
                            eventHub.addEventListener(CallbackEvents.RouteChanged, cb);
                            // Notify admin to start intercepting route change
                            handshake.handle(routeChangeInterceptFeature.name, { intercept: true });
                            var stopInterception = function () {
                                // Notify admin to stop intercepting route change
                                handshake.handle(routeChangeInterceptFeature.name, { intercept: false });
                                eventHub.removeEventListener(CallbackEvents.RouteChanged, cb);
                            };
                            return stopInterception;
                        },
                        retryRouteChange: function () {
                            handshake.handle(routeChangeRetryFeature.name);
                        }
                    }];
        }
    });
}); };
export var AppBridge = {
    init: init
};
