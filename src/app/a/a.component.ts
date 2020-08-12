import { Component, Input } from "@angular/core";
import { Point } from "src/app/models/point";

@Component({
  selector: "a-app",
  templateUrl: "a.component.html"
})
export class AComponent {
  @Input()
  myValue: Point;
}
