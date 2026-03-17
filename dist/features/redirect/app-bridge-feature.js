import { Events } from '../../constants/events';
export var redirect = {
    name: 'redirect',
    handler: function (handshake, params) {
        return new Promise(function (resolve) {
            handshake.toParent(Events.Redirect, params);
            resolve();
        });
    }
};
