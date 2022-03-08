import Postmate from 'postmate';
import { AppBridgeFeature } from '../interfaces/app-bridge-feature';
export declare class ChildHandshake {
    clientId: string;
    postmate: Postmate.ChildAPI;
    features: AppBridgeFeature[];
    constructor(clientId: string);
    init(): Promise<void>;
    addFeature(feature: AppBridgeFeature): void;
    handle(featureName: string, params?: any): any;
    getEventId(clientId: string, eventType: string): string;
    /**
     * send data to AdminSDK (one way trigger)
     * @param eventType
     * @param data
     */
    toParent(eventType: string, data?: {
        [key: string]: any;
    }): void;
    /**
     * send data to AdminSDK (round-trip trigger)
     * @param eventType
     * @param data
     */
    requestParent(eventType: string, data?: {
        [key: string]: any;
    }): Promise<any>;
}
