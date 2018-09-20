import { Component, OnInit } from '@angular/core';
import {  } from "../click-increment/click-increment.component";

@Component({
  selector: 'app-click-child',
  templateUrl: './click-child.component.html',
  styleUrls: ['./click-child.component.css']
})
export class ClickChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  count(event) {

  }

}
