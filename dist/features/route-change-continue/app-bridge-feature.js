import { Events } from '../../constants/events';
export var routeChangeContinue = {
    name: 'routeChangeContinue',
    handler: function (handshake) {
        handshake.toParent(Events.RouteChangeContinue);
    }
};
