import {Html, NextScript, Main, Head} from "next/document";
import * as  React from "react";
import {useDefaultUrl} from "../server/config";
import Link from "next/link";
import {useMediaQuery} from "react-responsive";

interface Props<T> {
    data: string[];
    minWidth: number;
}

function HeaderElement() {
    const [url] = React.useState(useDefaultUrl());
    const HeaderElementDynamic = ({ minWidth}: Props<string>) => {
        const isBreakpoint = useMediaQuery({query : `(max-width: ${minWidth}px)`});
        const contents : React.ReactNode[] = [];
    };
    const HeaderElementContent = () => {
        return (
            <>
                content
            </>
        )
    };
    const HeaderElementLinks = ({text, toUrl}: { text: string, toUrl: any }) => {
        return (
            // link
            <div style={{
                paddingLeft: 10,
                paddingRight: 10,
            }}>
                <Link href={`${url}${toUrl}`} style={{
                    textDecoration: "none",
                    color: "#ff3300",
                    fontSize: 13
                }}>
                    <h1>{text}</h1>
                </Link>
            </div>
        )
    };
    return (
        <div style={{
            backgroundColor: "#000021",
            color: "#ff3300"
        }}>
            <div style={{
                display: "flex",
                padding: 13,
            }}>
                <Link href={`${url}/`} style={{
                    textDecoration: "none",
                    color: "#ff6300",
                }}>
                    <h1>_projectV</h1>
                </Link>
                <div style={{
                    width: 100,
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                }}>
                    test
                </div>
            </div>
            <div style={{
                display: "flex",
                padding: 10,
            }}>
                <div style={{
                    display: "flex",
                    width: "50%",
                }}>
                    aaa
                </div>
                <div style={{
                    display: "flex",
                    width: "50%",
                    justifyContent: "flex-end",
                }}>
                    <HeaderElementLinks text={"contact"} toUrl={"/"}/>
                    <HeaderElementLinks text={"contact"} toUrl={"/"}/>
                </div>
            </div>
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
            }}>
                <HeaderElement/>
            </header>
            <body style={{
                backgroundColor: "#ff3300"
            }}>
            <Main/>
            <NextScript/>
            </body>
            <footer style={{
                backgroundColor: "#000021",
                color: "#ff3300",
            }}>
                a
            </footer>
        </Html>
    )
};

export default Docs;