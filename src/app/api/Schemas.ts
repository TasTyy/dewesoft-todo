import { z } from "zod";

export const createTodoSchema = z.object({
    title: z.string().min(1, "Title is required").max(255),
});

export const updateTodoSchema = z.object({
    id: z.number(),
    title: z.string().min(1).max(255).optional(),
    completed: z.boolean().optional(),
});

export const toggleTodoSchema = z.object({
    id: z.number(),
    completed: z.boolean(),
});

export const deleteTodoSchema = z.object({
    id: z.number(),
});
