import { Events } from '../../constants/events';
export var goBack = {
    name: 'goBack',
    handler: function (handshake) {
        handshake.toParent(Events.GoBack);
    }
};
