import { Component, inject, OnInit, signal } from "@angular/core";
import { TodoItem } from "../components/todo-item/todo-item";
import { TodosService } from "../services/todos.service";
import { Todo } from "../model/todo.type";

@Component({
    selector: "app-todos",
    imports: [TodoItem],
    templateUrl: "./todos.html",
    styleUrl: "./todos.css"
})
export class Todos {
    todosService = inject(TodosService);
    todoItems = signal<Array<Todo>>([]);
    ngOnInit(): void {
        console.log(this.todosService.todoItems);
        this.todoItems.set(this.todosService.todoItems)
    }
}
