import { Injectable } from "@angular/core";
import { Todo } from "../model/todo.type";

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
    constructor() {}
}
