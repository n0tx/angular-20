import { Component, inject, OnInit } from "@angular/core";
import { TodoItem } from "../components/todo-item/todo-item";
import { TodosService } from "../services/todos.service";

@Component({
    selector: "app-todos",
    imports: [TodoItem],
    templateUrl: "./todos.html",
    styleUrl: "./todos.css"
})
export class Todos {
    todosService = inject(TodosService);
    ngOnInit(): void {
        console.log(this.todosService.todoItems);
    }
}
