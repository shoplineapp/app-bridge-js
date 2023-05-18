var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ErrorCodes } from "../constants/error-codes";
var BaseError = /** @class */ (function (_super) {
    __extends(BaseError, _super);
    function BaseError(message, code) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.code = code || ErrorCodes.UNKNOWN_ERROR;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, BaseError);
        }
        return _this;
    }
    return BaseError;
}(Error));
export { BaseError };
