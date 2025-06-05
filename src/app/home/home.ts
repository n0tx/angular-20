import { Component, signal } from "@angular/core";
import { Greeting } from "../components/greeting/greeting";

@Component({
    selector: "app-home",
    imports: [Greeting],
    templateUrl: "./home.html",
    styleUrl: "./home.css"
})
export class Home {
    protected title = signal("home works!");
    pesanHome = signal("Hello dari home!");
}
