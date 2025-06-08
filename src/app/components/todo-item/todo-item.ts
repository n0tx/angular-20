import { Component, input } from "@angular/core";
import { Todo } from "../../model/todo.type";

@Component({
    selector: "app-todo-item",
    imports: [],
    templateUrl: "./todo-item.html",
    styleUrl: "./todo-item.css"
})
export class TodoItem {
    todoItem = input.required<Todo>();
}
