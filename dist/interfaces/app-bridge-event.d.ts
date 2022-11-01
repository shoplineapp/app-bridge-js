export interface AppBridgeEventData {
    eventType: string;
    eventId?: string;
    clientId?: string;
    [key: string]: any;
}
export declare interface AppBridgeEvent extends Event {
    data?: AppBridgeEventData;
}
