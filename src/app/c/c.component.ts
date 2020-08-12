import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "c-app",
  templateUrl: "c.component.html"
})
export class CComponent implements OnInit {
  @Output()
  decrement = new EventEmitter<void>();

  ngOnInit() {}

  onClickDecrement() {
    this.decrement.emit();
  }
}
