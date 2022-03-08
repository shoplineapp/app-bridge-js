import jwt_decode from 'jwt-decode';
import { CallbackEvents } from '../../constants/callback-events';
import { Events } from '../../constants/events';
var sessionTokenInfo = null;
var isExpiring = function (tokenInfo) {
    var payload = tokenInfo.payload;
    var now = new Date().getTime() / 1000;
    return payload.exp - now < 10;
};
var decodeToken = function (token) {
    return {
        payload: jwt_decode(token),
        token: token
    };
};
export var getSessionToken = {
    name: 'getSessionToken',
    callbackEventType: CallbackEvents.GetSessionToken,
    handler: function (handshake) {
        return new Promise(function (resolve) {
            if (sessionTokenInfo !== null && !isExpiring(sessionTokenInfo)) {
                return resolve(sessionTokenInfo.token);
            }
            handshake.requestParent(Events.GetSessionToken).then(function (data) {
                sessionTokenInfo = decodeToken(data.sessionToken);
                resolve(sessionTokenInfo.token);
            });
        });
    }
};
