import { AppBridgeEventData } from './app-bridge-event';
import { ChildHandshake } from '../app-bridge/child-handshake';
export declare interface AppBridgeFeature {
    /**
     * unique feature name
     */
    name: string;
    /**
     * Listening event type from AdminSDK to trigger callbackHandler
     */
    callbackEventType?: string;
    /**
     * Handle user input and fire event to AdminSDK
     * @param handshake communication channel to AdminSDK
     * @param params data passed from user input
     */
    handler?: (handshake: ChildHandshake, params?: any) => any;
    /**
     * Handle data received from AdminSDK
     * @param data
     */
    callbackHandler?: (data: AppBridgeEventData) => any;
}
