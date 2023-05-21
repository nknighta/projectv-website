import HMenu from "../component/HeaderMenu/Menu";
import {Text,Box,Flex} from "@chakra-ui/react";
import Dynamic from "../lib/dynamic";

export default function Index() {
    return (
        <>
            <div style={{
                color: "#fff",
            }}>
                <Flex justifyContent={"center"}>
                    <Flex w={"70vh"} height={"20em"} alignItems={"center"} bgColor={""} m={10} >
                        <Text fontSize={40} style={{
                            fontWeight: "bold"
                        }}>Useful API and Library for Web3&Web5 Developers</Text>
                    </Flex>
                    <Box w={"40vh"}>
                    </Box>
                </Flex>
            </div>
            <div style={{
                display: "flex",
                height: 400,
                justifyContent: "center"
            }}>
                <div style={{
                    width: 900,
                    height: 400,
                    backgroundColor: "#ff2200",
                    marginTop: 80,
                }}>
                    <Box display={"flex"} justifyContent={"center"} p={10}>
                        <Text fontSize={37}>Hello!</Text>
                    </Box>
                    <Box display={"flex"} justifyContent={"center"} p={10}>
                        <Box fontSize={30}>
                            Awesome Web3 platform for developers!
                        </Box>
                    </Box>
                </div>
            </div>
        </>
    )
}