import { Events } from '../../constants/events';
export var intercom = {
    name: 'intercom',
    handler: function (handshake) {
        handshake.toParent(Events.Intercom);
    }
};
