import create from "zustand/react";

interface Task {
    id: string;
    title: string;
    createdAt: number;
}

interface ToDoStore {
    tasks: Task[],
    createTask: (title: string) => void;
    updateTask: (id: string, title: string) => void;
    removeTask: (id: string) => void;
}

export const useStore = create<ToDoStore>((set, get) => ({
    tasks: [],
    createTask: (title) => {
        const { tasks } = get()
    },
    updateTask: (id, title) => {},
    removeTask: (id) => {},
}))