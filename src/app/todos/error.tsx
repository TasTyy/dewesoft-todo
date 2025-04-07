"use client";

import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error("An error occurred:", error);
    }, [error]);

    return (
        <Box minH="70vh" display="flex" justifyContent="center" alignItems="center">
            <VStack spacing={4}>
                <Heading size="lg">Something went wrong</Heading>
                <Text color="gray.600">{error.message}</Text>
                <Button onClick={reset} colorScheme="teal">
                    Try again
                </Button>
            </VStack>
        </Box>
    );
}
