import { Box, Spinner, Text, VStack } from "@chakra-ui/react";

export default function TodosLoadingPage() {
    return (
        <Box minH="70vh" display="flex" justifyContent="center" alignItems="center">
            <VStack spacing={4}>
                <Spinner size="xl" color="teal.500" />
                <Text>Loading your tasks...</Text>
            </VStack>
        </Box>
    );
}
