import jwt_decode from 'jwt-decode';
import { CallbackEvents } from '../../constants/callback-events';
import { Events } from '../../constants/events';
var sessionToken = null;
var isExpiring = function (token) {
    var decoded = jwt_decode(token);
    var now = new Date().getTime() / 1000;
    return decoded.exp - now < 10;
};
export var getSessionToken = {
    name: 'getSessionToken',
    callbackEventType: CallbackEvents.GetSessionToken,
    handler: function (handshake) {
        return new Promise(function (resolve) {
            if (sessionToken !== null && !isExpiring(sessionToken)) {
                return resolve(sessionToken);
            }
            handshake.requestParent(Events.GetSessionToken).then(function (data) {
                resolve(data.sessionToken);
            });
        });
    }
};
