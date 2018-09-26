export class Todo {
    userId: number;
    id:number;
    title:string;
    completed: boolean;

    static fromJSON(json): Todo {
        if(json === null || json === undefined) return undefined;
        const todo = new Todo();
        todo.id = json.id;
        todo.userId = json.userId;
        todo.completed = json.completed;
        todo.title = json.title;
        return todo;
    }
}