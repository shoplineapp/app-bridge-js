declare interface AppBridgeClient {
    getSessionToken(): Promise<string>;
    redirect(url: string): void;
    oauth(redirectUrl: string, scope: string): void;
    subscribe(event: string, handler: Function): void;
    getLanguage(): Promise<string>;
    intercom(): void;
    getCurrentUrl(): Promise<string>;
    routeChange(path: string, querystring?: string): void;
}
export declare const AppBridge: {
    init: (options: {
        clientId: string;
        authUrl: string;
    }) => Promise<AppBridgeClient>;
};
export {};
