import { Component, signal, input } from "@angular/core";

@Component({
    selector: "app-greeting",
    imports: [],
    templateUrl: "./greeting.html",
    styleUrl: "./greeting.css"
})
export class Greeting {
    protected title = signal("Greetings!");
    greeting = input("hello hello");
}
