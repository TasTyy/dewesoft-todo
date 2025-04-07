"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { createTodoSchema, toggleTodoSchema, deleteTodoSchema } from "@/app/api/Schemas";

export async function getTodos() {
    return await prisma.todo.findMany({
        orderBy: { createdAt: "desc" },
    });
}
export async function createTodo(formData: FormData) {
    const title = formData.get("title")?.toString() ?? "";
    const parsed = createTodoSchema.safeParse({ title });
    if (!parsed.success) {
        console.error(parsed.error.flatten());
        return;
    }
    await prisma.todo.create({ data: { title: parsed.data.title } });
    revalidatePath("/todos");
}

export async function toggleTodo(formData: FormData) {
    const id = Number(formData.get("id"));
    const completed = formData.get("completed") === "true";
    const parsed = toggleTodoSchema.safeParse({ id, completed });
    if (!parsed.success) {
        console.error(parsed.error.flatten());
        return;
    }
    await prisma.todo.update({
        where: { id: parsed.data.id },
        data: { completed: parsed.data.completed },
    });
    revalidatePath("/todos");
}

export async function deleteTodo(formData: FormData) {
    const id = Number(formData.get("id"));
    const parsed = deleteTodoSchema.safeParse({ id });
    if (!parsed.success) {
        console.error(parsed.error.flatten());
        return;
    }
    await prisma.todo.delete({ where: { id: parsed.data.id } });
    revalidatePath("/todos");
}
