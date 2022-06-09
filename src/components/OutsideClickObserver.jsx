import { useRef } from "react";
import useOutsideClickObserver from "../lrn-hooks/hooks/useOutsideClickObserver";

/**
 * Component that alerts if you click outside of it
 */
 export default function OutsideClickObserver(props) {
    const wrapperRef = useRef(null);
    
    //Take note to use a function keyword as the shorthand does not work as expected ( error: is not a function)
    useOutsideClickObserver(wrapperRef, props.outsideClickHandler);
  
    return <div ref={wrapperRef}>{props.children}</div>;
  }