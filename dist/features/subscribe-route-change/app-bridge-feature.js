import { Events } from '../../constants/events';
export var subscribeRouteChange = {
    name: 'subscribeRouteChange',
    handler: function (handshake, params) {
        handshake.toParent(Events.SubscribeRouteChange, {
            subscribed: params.subscribed,
        });
    }
};
