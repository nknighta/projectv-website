import React,{useState,useEffect} from "react";
import {Text} from "@chakra-ui/react";

export const getWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => {
                setWindowSize({
                    width:
                    window.innerWidth,
                    height: window.innerHeight,
                });
            };

            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        } else {
            return;
        }
    }, []);
    return windowSize;
};

const DynamicContainer = () => {
    const {width} = getWindowSize();
    return (
        <div>
            {width}px
        </div>
    )
}
