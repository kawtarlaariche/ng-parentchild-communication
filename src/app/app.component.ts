import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { Point } from "src/app/models/point";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnChanges {
  point: Point;
  index: number = 0;

  ngOnChanges(changes: SimpleChanges) {}

  ngOnInit() {
    this.point = new Point(this.index);
  }

  increment() {
    this.index = this.index + 1;
    this.point = new Point(this.index);
  }

  decrement() {
    this.index = this.index - 1;
    this.point = new Point(this.index);
  }

  infinitList() {}
}
