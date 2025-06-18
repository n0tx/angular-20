import { Component, inject, OnInit, signal } from "@angular/core";
import { TodoItem } from "../components/todo-item/todo-item";
import { TodosService } from "../services/todos.service";
import { Todo } from "../model/todo.type";
import { FormsModule } from "@angular/forms";
import { FilterTodosPipe } from "../pipes/filter-todos-pipe";

@Component({
    selector: "app-todos",
    imports: [TodoItem, FormsModule, FilterTodosPipe],
    templateUrl: "./todos.html",
    styleUrl: "./todos.css"
})
export class Todos {
    todosService = inject(TodosService);
    todoItems = signal<Array<Todo>>([]);
    todoItemsFromApi = signal<Array<Todo>>([]);
    searchTerm = signal("");
    ngOnInit(): void {
        console.log("todo hardcoded: ", this.todosService.todoItems);

        this.todoItems.set(this.todosService.todoItems);
        console.log("todo hardcoded signal: ", this.todoItems());

        this.todosService.getDataJsonServer().subscribe(todos => {
            // console.log("data from API: ", todos);
            this.todoItemsFromApi.set(todos);
            console.log("data from APIs: ", this.todoItemsFromApi());
        });
    }

    updateTodoItem(todoItem: Todo) {
        this.todoItemsFromApi.update(todos => {
            return todos.map(todo => {
                if (todo.id === todoItem.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            });
        });
    }

    deleteTodoItem(todoItem: Todo) {
        this.todosService.deleteTodoItem(todoItem.id).subscribe(() => {
            this.todoItemsFromApi.update(todos =>
                todos.filter(todo => todo.id !== todoItem.id)
            );
            /*
            // console.log("data from API: ", todos);
            this.todoItemsFromApi.set(todos);
            console.log("data from APIs: ", this.todoItemsFromApi());
            */
        });
    }
}
