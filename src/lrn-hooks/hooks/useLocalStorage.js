import { useEffect, useState } from "react";

/**
 * Take note of all the checks before coming to the last option of actually using the passed literal value.
 * @param {*} key 
 * @param {*} initialValue 
 * @returns 
 * 
 */
const getSavedValue = (key, initialValue)=>{
    const savedValue = JSON.parse(localStorage.getItem(key));
    if(savedValue){
        return savedValue;
    }
    /*
     * Take note that this is just a utility if you want to pass a function instaed of actual value.
     * if that is the case, then the function will be run and the returned value will be used.
     */
    if(initialValue instanceof Function){
        return initialValue()
    }
    return initialValue;
}

export default function useLocalStorage(key, initialValue) {
    /**
     * This is totally unrelated to the calling of the Local storage( the use of the function as a parameter of useState).
     *  - This was done because we want to use a utility function getSavedValue() instead of evaluating it inside the actual hook scope
     *  - -- which will be run every render ( instead of just the first  render )
     */

    const lsChangeEvent = new CustomEvent("appLocalStorageChanged");
    console.log("--HOOK SCOPE CALL--");
    const [value, setValue] = useState(()=>{
        console.log("--STATE IN HOOK SCOPE CALL--");
        return getSavedValue(key, initialValue)
    });

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value));
        document.dispatchEvent(lsChangeEvent);
    }, [value]);


    return [value, setValue];
}

