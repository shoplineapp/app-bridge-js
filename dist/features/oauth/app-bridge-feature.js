import { Events } from '../../constants/events';
export var oauth = {
    name: 'oauth',
    handler: function (handshake, params) {
        var data = {
            authUrl: params.authUrl
        };
        handshake.toParent(Events.Oauth, data);
    }
};
