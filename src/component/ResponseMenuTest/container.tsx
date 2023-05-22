import React,{useState,useLayoutEffect} from "react";
import {Text} from "@chakra-ui/react";

export const getWindowSize = () => {

};

/**
 * import React, { useEffect, useRef } from 'react';
 *
 * const TabComponent: React.FC = () => {
 *   const tabRef = useRef<HTMLDivElement>(null);
 *
 *   useEffect(() => {
 *     const handleResize = () => {
 *       if (tabRef.current) {
 *         const tabWidth = tabRef.current.offsetWidth;
 *         console.log('Tab width:', tabWidth, 'px');
 *       }
 *     };
 *
 *     window.addEventListener('resize', handleResize);
 *     handleResize(); // 読み込み時にもサイズを計測
 *
 *     return () => {
 *       window.removeEventListener('resize', handleResize);
 *     };
 *   }, []);
 *
 *   return (
 *     <div ref={tabRef}>
}
*     </div>
*   )
;
*
}
;
*
*
export default TabComponent;
 */