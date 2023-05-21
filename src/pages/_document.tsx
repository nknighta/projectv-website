import {Html, NextScript, Main, Head} from "next/document";
import React, {useId} from "react";
import {useDefaultUrl} from "../server/config";
import Link from "next/link";
import {Box, Flex, Text} from "@chakra-ui/react";
import {ExternalLinkIcon, WarningIcon} from "@chakra-ui/icons";

interface Props<T> {
    data: string[];
    minWidth: number;
}


function HeaderElement() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
        }}>

        </div>
    )
};

function Docs() {
    return (
        <Html>
            <Head></Head>
            <header style={{
                padding: 7,
                backgroundColor: "#000021",
                marginLeft: 130,
                marginRight: 130,
                color: "#fff",
            }}>
                <Flex>
                    <Box w={"70%"} display={"flex"}>
                        <Link href={`/`} style={{
                            textDecoration: "none",
                            color: "#ff6300",
                            fontSize: 33
                        }}>
                            <h1>_projectV</h1>
                        </Link>
                        <Flex pl={40} justifyContent={"space-between"} alignItems={"center"}>
                            <Text>Web3 API Platform</Text>
                        </Flex>
                    </Box>
                    <Flex w={"30%"} justifyContent={"space-between"} alignItems={"center"}>
                        <Flex alignItems={"center"}>
                            <Link href={"https://github.com/nknighta"} target={"_blank"}>GitHub</Link>
                            <ExternalLinkIcon/>
                        </Flex>
                        <Link href={"/api-list"}>API</Link>
                        <Link href={"/releases"}>releases</Link>
                        <Link href={"/blog"}>Blog</Link>
                        <Link href={"/docs"}>Docs</Link>
                    </Flex>
                </Flex>
            </header>
            <body style={{
                backgroundColor: "#000021",
            }}>
            <Main/>
            <NextScript/>
            </body>
            <footer style={{
                backgroundColor: "#000021",
                color: "#ff3300",
            }}>
            </footer>
        </Html>
    )
};

export default Docs;