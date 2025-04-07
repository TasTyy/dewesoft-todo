import { getTodos } from "@/lib/todo";
import { Box, Heading, List, ListItem, Text, VStack } from "@chakra-ui/react";
import TodoInput from "@/components/TodoInput";
import TodoItem from "@/components/TodoItem";

export default async function TodosPage() {
    const todos = await getTodos();

    return (
        <Box maxW="lg" mx="auto" mt={8} px={4}>
            <Heading size="lg" mb={6}>
                Your To-Do List
            </Heading>

            <TodoInput />

            <VStack spacing={3} align="stretch">
                {todos.length === 0 && <Text color="gray.500">No todos yet. Add your first one!</Text>}
                <List spacing={3}>
                    {todos.map((todo) => (
                        <ListItem key={todo.id}>
                            <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
                        </ListItem>
                    ))}
                </List>
            </VStack>
        </Box>
    );
}
