import { Events } from '../../constants/events';
export var routeChangeRetry = {
    name: 'routeChangeRetry',
    handler: function (handshake) {
        handshake.toParent(Events.RouteChangeRetry);
    }
};
