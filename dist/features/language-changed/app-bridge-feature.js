import { CallbackEvents } from '../../constants/callback-events';
import eventHub from '../../events/event-hub';
export var languageChanged = {
    name: 'languageChanged',
    callbackEventType: CallbackEvents.LanguageChanged,
    callbackHandler: function (data) {
        var language = data.language;
        var event = new Event(CallbackEvents.LanguageChanged);
        event.data = {
            eventType: CallbackEvents.LanguageChanged,
            language: language
        };
        eventHub.dispatchEvent(event);
    }
};
