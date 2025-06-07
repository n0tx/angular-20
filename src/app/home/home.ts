import { Component, signal, inject, OnInit } from "@angular/core";
import { Greeting } from "../components/greeting/greeting";
import { Counter } from "../components/counter/counter";
import { TodosService } from "../services/todos.service";
import { Todo } from "../model/todo.type";

@Component({
    selector: "app-home",
    imports: [Greeting, Counter],
    templateUrl: "./home.html",
    styleUrl: "./home.css"
})
export class Home {
    protected title = signal("home works!");
    pesanHome = signal("Hello dari home!");

    keyUpHandler(event: KeyboardEvent) {
        // console.log("user sedang mengetik key: " + event.key); // unidentified
        console.log("user sedang mengetik key: " + event.keyCode); // 229 atau string s
        // console.log("user sedang mengetik key: " + event.which); // 229 atau string s
    }
    todosService = inject(TodosService);
    todoItems = signal<Array<Todo>>([]);

    ngOnInit(): void {
        console.log("dari home: ", this.todosService.todoItems);
        this.todoItems.set(this.todosService.todoItems);
        console.log("signal dari home: ", this.todoItems());
    }
}
