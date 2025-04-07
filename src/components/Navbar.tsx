"use client";

import Link from "next/link";
import { Button, Box, Tabs, TabList, Tab, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

interface Props {
    defaultIndex: number;
}

export default function Navbar({ defaultIndex }: Props) {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" px={6} py={4}>
            <Tabs defaultIndex={defaultIndex} variant="line" size="sm">
                <TabList>
                    <Tab>
                        <Link href="/">Home</Link>
                    </Tab>
                    <Tab>
                        <Link href="/todos">ToDo</Link>
                    </Tab>
                </TabList>
            </Tabs>
            <Button variant="ghost" size="sm" onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
        </Box>
    );
}
