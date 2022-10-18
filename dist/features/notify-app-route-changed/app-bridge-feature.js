import { Events } from '../../constants/events';
export var notifyAppRouteChanged = {
    name: 'notifyAppRouteChanged',
    handler: function (handshake, params) {
        handshake.toParent(Events.NotifyAppRouteChanged, {
            url: params.url,
        });
    }
};
