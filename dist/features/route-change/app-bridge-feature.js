import { CallbackEvents } from '../../constants/callback-events';
import eventHub from '../../events/event-hub';
export var routeChange = {
    name: 'routeChange',
    callbackEventType: CallbackEvents.RouteChange,
    callbackHandler: function () {
        var event = new CustomEvent(CallbackEvents.RouteChange, { cancelable: true });
        event.data = {
            eventType: CallbackEvents.RouteChange,
        };
        var continueEvent = eventHub.dispatchEvent(event);
        return !continueEvent;
    },
    useCallbackDirectly: true,
};
