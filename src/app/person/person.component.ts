import { Component, OnInit, Input } from '@angular/core';
import { PrettyPrintPipe } from '../prettyjson.pipe'

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() peopleList: Array<Object>

  constructor() { }

  ngOnInit() {
  }

}
