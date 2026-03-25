import { CallbackEvents } from '../../constants/callback-events';
import { Events } from '../../constants/events';
import { AppBridgeError } from '../../errors/app-bridge-error';
import { ErrorCodes } from '../../constants/error-codes';
export var getMerchantAuthorities = {
    name: 'getMerchantAuthorities',
    callbackEventType: CallbackEvents.GetMerchantAuthorities,
    handler: function (handshake) {
        return new Promise(function (resolve, reject) {
            handshake
                .requestParent(Events.GetMerchantAuthorities)
                .then(function (data) {
                if (!(data === null || data === void 0 ? void 0 : data.authority)) {
                    var err = new AppBridgeError('Cannot get merchant authority', ErrorCodes.UNKNOWN_ERROR);
                    reject(err);
                    return;
                }
                resolve({
                    merchantId: data.authority.merchantId,
                    authorized: data.authority.authorized,
                    scopes: data.authority.scopes,
                    versionType: data.authority.versionType
                });
            })
                .catch(function (err) {
                reject(err);
            });
        });
    }
};
