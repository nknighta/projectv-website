import React , {useEffect} from "react";
import {Text} from "@chakra-ui/react";

const ModePC = () => {
    return (
        <>
            <Text>PC</Text>
        </>
    )
};

const ModeMobile = () => {
    return (
        <>
            <Text>Mobile</Text>
        </>
    )
};

const Dynamic = () => {
    const [mode,setMode] = React.useState<boolean>(false);
    const  deviceMode:string[] = ["PC","Mobile"];
    const deviceType = navigator.userAgent;
    const deviceTypeChecker = deviceType.includes( "Mobile" ) ? deviceMode[1] : deviceMode[0];
    useEffect(() => {
        if (deviceTypeChecker === deviceMode[1]) {
            setMode(true);
        } else {
            setMode(false);
        }
    },[deviceTypeChecker]);
    return (
        <div>
            {
                mode ? <ModeMobile/> : <ModePC/>
            }
        </div>
    )
};

export default Dynamic;