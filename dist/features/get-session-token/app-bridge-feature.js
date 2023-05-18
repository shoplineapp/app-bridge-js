import jwt_decode from 'jwt-decode';
import { CallbackEvents } from '../../constants/callback-events';
import { Events } from '../../constants/events';
import { TokenNotFoundError } from '../../errors/token-not-found-error';
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
        return new Promise(function (resolve, reject) {
            if (sessionTokenInfo !== null && !isExpiring(sessionTokenInfo)) {
                return resolve(sessionTokenInfo.token);
            }
            handshake.requestParent(Events.GetSessionToken).then(function (data) {
                if (!(data === null || data === void 0 ? void 0 : data.sessionToken)) {
                    var err = new TokenNotFoundError("session token not found");
                    reject(err);
                    return;
                }
                sessionTokenInfo = decodeToken(data.sessionToken);
                resolve(sessionTokenInfo.token);
            }).catch(function (err) {
                reject(err);
            });
        });
    }
};
