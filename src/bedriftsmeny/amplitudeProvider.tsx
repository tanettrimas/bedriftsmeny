import {AmplitudeClient} from "amplitude-js";
import React, {createContext, FunctionComponent} from 'react';

type Context = {
    loggBedriftValgt: () => void;
}

interface Props {
    amplitudeClient?: AmplitudeClient
}

export const AmplitudeLoggerContext = createContext<Context>({} as Context);

export const AmplitudeProvider: FunctionComponent<Props> = (props) => {

    const loggBedriftValgt = () => {
        if (props.amplitudeClient !== undefined) {
            props.amplitudeClient.logEvent("virksomhetsklikk", {url:window.location.toString()})
        }
    }

    let defaultContext: Context = {
        loggBedriftValgt
    };

    return (
        <AmplitudeLoggerContext.Provider value={defaultContext}>
            {props.children}
        </AmplitudeLoggerContext.Provider>
    )
};