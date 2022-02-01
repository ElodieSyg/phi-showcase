import { useState, createContext } from "react";

export const ResponsiveContext = createContext();

const ResponsiveCtx = (props) => {
    const [isResponsive, setResponsive] = useState(false);
    const value = {
        isResponsive,
        setResponsive,
    };

    return (
        <ResponsiveContext.Provider value={value}>
            {props.children}
        </ResponsiveContext.Provider>
    );
};

export default ResponsiveCtx;
;