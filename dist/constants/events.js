/**
 * Event call from app-bridge to admin-adk
 */
export var Events = {
    Redirect: 'app-bridge:redirect',
    GoBack: 'app-bridge:go-back',
    GetSessionToken: 'app-bridge:get-session-token',
    Oauth: 'app-bridge:oauth',
    Intercom: 'app-bridge:intercom',
    GetLanguage: 'app-bridge:get-language',
    GetCurrentUrl: 'app-bridge:get-current-url',
    NotifyAppRouteChanged: 'app-bridge:notify-app-route-changed',
    ChangePageTitle: 'app-bridge:change-page-title',
    RetryRouteChange: 'app-bridge:retry-route-change',
    SubscribeRouteChange: 'app-bridge:subscribe-route-change',
};
