import { Sigma } from "sigma/sigma";
export interface SigmaContextInterface {
    sigma: Sigma;
}
export declare const SigmaContext: any;
export declare const SigmaProvider: any;
export declare function useSigmaContext(): SigmaContextInterface;
