import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  constructor() { }

  arrPeople = [
    { id: 1, name: 'Teo', age: 20, phoneNumber: '0123' },
    { id: 2, name: 'Ti', age: 19, phoneNumber: '0456' },
    { id: 3, name: 'Tun', age: 24, phoneNumber: '0789' },
  ]

  ngOnInit() {
  }

}
