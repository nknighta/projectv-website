import {useState,useEffect} from "react";

export const useDefaultUrl = () => {
    const [defaultUrl , setDefaultUrl] = useState({
        url: ""
    });
    useEffect(() => {
        setDefaultUrl({
            url: "https://projectv.io",
        });
    },[]);
    const url = defaultUrl.url;
    return url;
};
