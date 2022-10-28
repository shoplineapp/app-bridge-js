import { Events } from '../../constants/events';
export var routeChangeCancel = {
    name: 'routeChangeCancel',
    handler: function (handshake) {
        handshake.toParent(Events.RouteChangeCancel);
    }
};
