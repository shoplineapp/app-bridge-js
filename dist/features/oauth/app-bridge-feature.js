import { Events } from '../../constants/events';
export var oauth = {
    name: 'oauth',
    handler: function (handshake, params) {
        var data = {
            redirectUrl: params.redirectUrl,
            scope: params.scope
        };
        handshake.toParent(Events.Oauth, data);
    }
};
