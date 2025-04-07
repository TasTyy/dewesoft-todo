"use client";

import { useRef } from "react";
import { HStack, Input, Button } from "@chakra-ui/react";
import { createTodo } from "@/lib/todo";

export default function TodoForm() {
    const ref = useRef<HTMLFormElement>(null);

    return (
        <form
            action={createTodo}
            ref={ref}
            onSubmit={() => {
                setTimeout(() => ref.current?.reset(), 100); // Clear input after submit
            }}
        >
            <HStack mb={6}>
                <Input name="title" placeholder="Enter a new task" required />
                <Button type="submit" colorScheme="teal">
                    Add
                </Button>
            </HStack>
        </form>
    );
}
