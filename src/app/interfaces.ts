export interface Todo {
    title: string;
    completed: boolean;
}

export interface AppData {
    todos: Array<Todo>;
}