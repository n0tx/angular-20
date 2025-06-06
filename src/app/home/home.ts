import { Component, signal } from "@angular/core";
import { Greeting } from "../components/greeting/greeting";
import { Counter } from "../components/counter/counter";

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
}
