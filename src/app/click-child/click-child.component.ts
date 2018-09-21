import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ClickIncrementComponent } from "../click-increment/click-increment.component";

@Component({
  selector: 'app-click-child',
  templateUrl: './click-child.component.html',
  styleUrls: ['./click-child.component.css']
})
export class ClickChildComponent implements OnInit {

  constructor() { }
  @Output() increment = new EventEmitter();
  @Output() reset = new EventEmitter();

  ngOnInit() {
  }

  onReset() {
    this.reset.emit();
  }

  onIncrement() {
    this.increment.emit();
  }
}
