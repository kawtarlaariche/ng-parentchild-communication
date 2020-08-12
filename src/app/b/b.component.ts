import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit
} from "@angular/core";
import { Point } from "../models/point";

@Component({
  selector: "b-app",
  templateUrl: "b.component.html"
})
export class BComponent implements OnInit, OnChanges {
  @Input()
  myValue: Point;

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {}
}
