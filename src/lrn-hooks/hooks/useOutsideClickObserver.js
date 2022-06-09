/**
 * Refernce: https://stackoverflow.com/a/42234988/9765927
 */

import React, { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export default function useOutsideClickObserver(ref, handler) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(true,event);
      }else{
        handler(false, null)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}


/**
 * USAGE: 
 *  Component that alerts if you click outside of it
 */
//  export default function OutsideNotifier(props) {
//     const wrapperRef = useRef(null);
//     useOutsideNotifier(wrapperRef);
  
//     return <div ref={wrapperRef}>{props.children}</div>;
//   }

