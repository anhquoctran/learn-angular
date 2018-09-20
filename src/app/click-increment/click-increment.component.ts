import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-increment',
  templateUrl: './click-increment.component.html',
  styleUrls: ['./click-increment.component.css']
})
export class ClickIncrementComponent implements OnInit {

  constructor() { }
  count: number = 0;
  ngOnInit() {
  }

}
