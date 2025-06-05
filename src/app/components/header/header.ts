import { Component, signal } from "@angular/core";

@Component({
    selector: "app-header",
    imports: [],
    templateUrl: "./header.html",
    styleUrl: "./header.css"
})
export class Header {
    protected title = signal('My First Angular App');
}
