import { CallbackEvents } from '../../constants/callback-events';
import eventHub from '../../events/event-hub';
export var routeChanged = {
    name: 'RouteChanged',
    callbackEventType: CallbackEvents.RouteChanged,
    callbackHandler: function (data) {
        var from = data.from, to = data.to;
        var event = new Event(CallbackEvents.RouteChanged);
        event.data = {
            eventType: CallbackEvents.RouteChanged,
            from: from,
            to: to
        };
        eventHub.dispatchEvent(event);
    }
};
