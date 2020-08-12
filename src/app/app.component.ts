import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { Point } from "src/app/models/point";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnChanges {
  points: Point[];
  point: Point;
  index: number;

  ngOnChanges(changes: SimpleChanges) {}

  ngOnInit() {
    this.index = 0;
    this.points = [new Point(0), new Point(1), new Point(3)];
    this.point = this.points[this.index];
  }

  increment() {
    this.index = this.index + 1;
    this.point = this.points[this.index];
  }

  decrement() {
    this.index = this.index - 1;
    this.point = this.points[this.index];
    console.log("decrement = " + this.point);
  }
}
