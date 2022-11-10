import { Events } from '../../constants/events';
export var routeChangeSubscribe = {
    name: 'routeChangeSubscribe',
    handler: function (handshake, params) {
        handshake.toParent(Events.RouteChangeSubscribe, {
            subscribed: params.subscribed,
        });
    }
};
