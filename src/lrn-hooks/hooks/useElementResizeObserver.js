import React from 'react'
import { useState } from 'react'
/**
 * 
 * @param {HTMLElement} element 
 * @returns 
 */
const getInitialElementSize = (element)=>{
    return element.clientWidth
}
export default function useElementResizeObserver() {
  const [elementSize, setElementSize] = useState(()=>{
    return 
  });
  
  return (
    <div></div>
  )
}
