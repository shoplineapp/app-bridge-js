import { Events } from '../../constants/events';
export var redirect = {
    name: 'redirect',
    handler: function (handshake, params) {
        handshake.toParent(Events.Redirect, { url: params.url });
    }
};
