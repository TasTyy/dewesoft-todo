"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Button, HStack, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Navbar() {
    const pathname = usePathname();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" px={6} py={4}>
            <HStack spacing={4}>
                <Button as={Link} href="/" variant={pathname === "/" ? "solid" : "ghost"} size="sm" colorScheme="blue">
                    Home
                </Button>
                <Button as={Link} href="/todos" variant={pathname === "/todos" ? "solid" : "ghost"} size="sm" colorScheme="blue">
                    ToDo
                </Button>
            </HStack>

            <Button variant="ghost" size="sm" onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
        </Box>
    );
}
