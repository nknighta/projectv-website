import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from "@chakra-ui/react";

export default function HMenu() {
    return (
        <Accordion w={300}>
            <AccordionItem border={"none"}>
                <AccordionButton>
                    <div style={{
                        width: 250
                    }}>
                        Apps
                    </div>
                    <AccordionIcon/>
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <ul style={{}}>
                        <li style={{
                            listStyle: "none",
                            display: "flex",
                            justifyContent: "flex-end",
                            marginRight: 30,
                            marginTop: 10,
                            marginBottom: 20
                        }}>aaa

                        </li>
                        <li style={{
                            listStyle: "none",
                            display: "flex",
                            justifyContent: "flex-end",
                            marginRight: 30,
                            marginTop: 10
                        }}>aaa
                        </li>
                    </ul>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem border={"none"}>
                <h2>
                    <AccordionButton>
                        <div style={{
                            width: 250
                        }}>
                            Pages
                        </div>
                        <AccordionIcon/>
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    BBBB
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
};