import { Component } from "@angular/core";
import { Header } from "./components/header/header";
import { Home } from "./home/home";

@Component({
    selector: "app-root",
    imports: [Home, Header],
    templateUrl: "./app.html",
    styleUrl: "./app.css"
})
export class App {
}
