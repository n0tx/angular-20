import { Component, input } from "@angular/core";
import { Todo } from "../../model/todo.type";
import { HighlightCompletedTodo } from "../../directives/highlight-completed-todo";

@Component({
    selector: "app-todo-item",
    imports: [HighlightCompletedTodo],
    templateUrl: "./todo-item.html",
    styleUrl: "./todo-item.css"
})
export class TodoItem {
    todoItem = input.required<Todo>();
}
