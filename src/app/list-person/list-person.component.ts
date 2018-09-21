import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css'],
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
export class ListPersonComponent implements OnInit {

  constructor() { }

  arrPeople = [
    { id: 1, name: 'Teo', age: 20, phoneNumber: '0123' },
    { id: 2, name: 'Ti', age: 19, phoneNumber: '0456' },
    { id: 3, name: 'Tun', age: 24, phoneNumber: '0789' },
    { id: 3, name: 'Tuan', age: 24, phoneNumber: '0789' },
    { id: 3, name: 'Tao', age: 24, phoneNumber: '0789' },
    { id: 3, name: 'Tien', age: 24, phoneNumber: '0789' },
    { id: 3, name: 'Tu', age: 24, phoneNumber: '0789' },
    { id: 3, name: 'Tuat', age: 24, phoneNumber: '0789' },
    { id: 3, name: 'Tinh', age: 24, phoneNumber: '0789' },
    { id: 3, name: 'Tan', age: 24, phoneNumber: '0789' },
    { id: 3, name: 'Tun', age: 24, phoneNumber: '0789' },
  ]

  ngOnInit() {
  }

}
