"use client";

import { Box, Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";

export default function HomePage() {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" minH="80vh" px={4}>
            <Card maxW="lg" w="full" textAlign="center" p={6}>
                <CardHeader>
                    <Heading size="2xl">Welcome to simple To-Do page</Heading>
                </CardHeader>
                <CardBody>
                    <Text fontSize="lg">To see the functionalities click on the ToDo in navigation bar</Text>
                </CardBody>
            </Card>
        </Box>
    );
}
