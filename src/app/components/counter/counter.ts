import { Component, signal } from "@angular/core";

@Component({
    selector: "app-counter",
    imports: [],
    templateUrl: "./counter.html",
    styleUrl: "./counter.css"
})
export class Counter {
    counterMessage = signal("counter works!");
    counterValue = signal(0);
    increment() {
      this.counterValue.update(val => val + 1);
    }
    decrement() {
        this.counterValue.update(val => val - 1);
    }
    reset() {
        this.counterValue.set(0);
    }
}
