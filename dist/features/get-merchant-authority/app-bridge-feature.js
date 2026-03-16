import { CallbackEvents } from '../../constants/callback-events';
import { Events } from '../../constants/events';
export var getMerchantAuthority = {
    name: 'getMerchantAuthority',
    callbackEventType: CallbackEvents.GetMerchantAuthority,
    handler: function (handshake) {
        return new Promise(function (resolve, reject) {
            handshake
                .requestParent(Events.GetMerchantAuthority)
                .then(function (data) {
                resolve(data.authorized);
            })
                .catch(function (err) {
                reject(err);
            });
        });
    }
};
