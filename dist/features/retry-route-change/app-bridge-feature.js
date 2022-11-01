import { Events } from '../../constants/events';
export var retryRouteChange = {
    name: 'retryRouteChange',
    handler: function (handshake) {
        handshake.toParent(Events.RetryRouteChange);
    }
};
