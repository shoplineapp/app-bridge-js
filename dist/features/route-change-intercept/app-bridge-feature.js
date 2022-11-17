import { Events } from '../../constants/events';
export var routeChangeIntercept = {
    name: 'routeChangeIntercept',
    handler: function (handshake, params) {
        handshake.toParent(Events.RouteChangeIntercept, {
            intercept: params.intercept,
        });
    }
};
