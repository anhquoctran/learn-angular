import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: 'app-click-increment',
  templateUrl: './click-increment.component.html',
  styleUrls: ['./click-increment.component.css'],
  animations:[
    trigger('show', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate(200, style({ opacity: 1 }))
        ]),
        transition(':leave', [
            style({ opacity: 1 }),
            animate(300, style({ opacity: 0 }))
        ])
    ])
  ]
})
export class ClickIncrementComponent implements OnInit, OnDestroy {
  

  constructor() { }
  count: number = 0;

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.count = 0;
  }
}
