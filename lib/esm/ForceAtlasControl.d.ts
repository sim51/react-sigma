import React from "react";
import { FA2LayoutSupervisorParameters } from "graphology-layout-forceatlas2/worker";
interface Props {
    /**
     * The FA2 worker settings.
     */
    settings?: FA2LayoutSupervisorParameters;
    /**
     * Option to tell what we do when the component is mounted
     *  - <code>-1</code> means that we do nothing (it's the same as no value)
     *  - <code>0</code> means that we start the algo (and don't auto stop it)
     *  - <code>X</code> mans that we start the algo, and stop it after X milliseconds
     */
    autoRunFor?: number;
}
export declare const ForceAtlasControl: React.FC<Props>;
export {};
