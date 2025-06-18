import { Injectable, inject } from "@angular/core";
import { Todo } from "../model/todo.type";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class TodosService {
    todoItems: Array<Todo> = [
        {
            userId: 1,
            completed: false,
            title: "groceries",
            id: 1
        },
        {
            userId: 1,
            completed: false,
            title: "hair cut",
            id: 2
        }
    ];

    http = inject(HttpClient);

    getDataFromApi() {
        const url = `https://jsonplaceholder.typicode.com/todos`;
        return this.http.get<Array<Todo>>(url);
    }
    getDataJsonServer() {
        const url = `http://localhost:3000/todos`;
        return this.http.get<Array<Todo>>(url);
    }
    deleteTodoItem(id: number) {
        const url = `http://localhost:3000/todos/${id}`;
        return this.http.delete(url);
    }
}
