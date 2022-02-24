import { Events } from '../../constants/events';
export var routeChange = {
    name: 'routeChange',
    handler: function (handshake, params) {
        handshake.toParent(Events.RouteChange, {
            path: params.path,
            querystring: params.querystring
        });
    }
};
