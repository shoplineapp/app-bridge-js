import { Events } from '../../constants/events';
export var changePageTitle = {
    name: 'changePageTitle',
    handler: function (handshake, params) {
        handshake.toParent(Events.ChangePageTitle, {
            title: params.title,
        });
    }
};
