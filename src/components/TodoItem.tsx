"use client";

import { useTransition } from "react";
import { Checkbox, HStack, Text, IconButton, Spacer } from "@chakra-ui/react";
import { toggleTodo, deleteTodo } from "@/lib/todo";
import { DeleteIcon } from "@chakra-ui/icons";

interface TodoItemProps {
    id: number;
    title: string;
    completed: boolean;
}

export default function TodoItem({ id, title, completed }: TodoItemProps) {
    const [isPending, startTransition] = useTransition();

    const handleToggle = () => {
        const formData = new FormData();
        formData.append("id", id.toString());
        formData.append("completed", (!completed).toString());

        startTransition(() => {
            toggleTodo(formData);
        });
    };

    const handleDelete = () => {
        const formData = new FormData();
        formData.append("id", id.toString());

        startTransition(() => {
            deleteTodo(formData);
        });
    };

    return (
        <HStack>
            <Checkbox isChecked={completed} onChange={handleToggle} isDisabled={isPending}>
                <Text as={completed ? "del" : undefined}>{title}</Text>
            </Checkbox>

            <Spacer />

            <IconButton
                icon={<DeleteIcon />}
                aria-label="Delete todo"
                size="sm"
                colorScheme="red"
                onClick={handleDelete}
                isDisabled={isPending}
                isLoading={isPending}
            />
        </HStack>
    );
}
