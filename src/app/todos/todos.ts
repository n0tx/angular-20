import { Component } from "@angular/core";
import { TodoItem } from "../components/todo-item/todo-item";

@Component({
    selector: "app-todos",
    imports: [TodoItem],
    templateUrl: "./todos.html",
    styleUrl: "./todos.css"
})
export class Todos {}
