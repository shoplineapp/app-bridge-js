export declare interface AppBridgeClient {
    getSessionToken(): Promise<string>;
    redirect(url: string): void;
    redirectAdminPage(page: string): void;
    goBack(): void;
    oauth(redirectUrl: string, scope: string): void;
    onLanguageChanged(handler: (language: string) => void): Function;
    getLanguage(): Promise<string>;
    intercom(): void;
    getCurrentUrl(): Promise<string>;
    notifyAppRouteChanged(url: string): void;
    changePageTitle(title: string): void;
    interceptRouteChange(handler: (from: string, to: string) => void): Function;
    retryRouteChange(): void;
    getMerchantAuthorities(): Promise<boolean>;
}
export declare const AppBridge: {
    init: (options: {
        clientId: string;
        authUrl: string;
    }) => Promise<AppBridgeClient>;
};
