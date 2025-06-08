import { Component, inject, OnInit, signal } from "@angular/core";
import { TodoItem } from "../components/todo-item/todo-item";
import { TodosService } from "../services/todos.service";
import { Todo } from "../model/todo.type";
import { NgIf } from "@angular/common";

@Component({
    selector: "app-todos",
    imports: [TodoItem, NgIf],
    templateUrl: "./todos.html",
    styleUrl: "./todos.css"
})
export class Todos {
    todosService = inject(TodosService);
    todoItems = signal<Array<Todo>>([]);
    todoItemsFromApi = signal<Array<Todo>>([]);
    ngOnInit(): void {
        console.log("todo hardcoded: ", this.todosService.todoItems);

        this.todoItems.set(this.todosService.todoItems);
        console.log("todo hardcoded signal: ", this.todoItems());

        this.todosService.getDataFromApi().subscribe(todos => {
            // console.log("data from API: ", todos);
            this.todoItemsFromApi.set(todos);
            console.log("data from APIs: ", this.todoItemsFromApi());
        });
    }
}
