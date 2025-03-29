import Link from "next/link";
import { Button, Box, Tabs, TabList, Tab, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" p="10px">
            <Tabs variant="line" size="sm">
                <TabList>
                    <Tab>
                        <Link href="/">Home</Link>
                    </Tab>
                    <Tab>
                        <Link href="/todos">ToDo</Link>
                    </Tab>
                </TabList>
            </Tabs>
            <Button variant="ghost" onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
        </Box>
    );
}
