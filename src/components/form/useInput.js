import { useState } from "react";

/**
 * 
 * @param {*} initialValue 
 * @returns 
 */
export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        bind: {
            value,
            onChange: event => {
                setValue(event.target.value);
            },
        }
    };
};