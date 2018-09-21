import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() appName: string;

  constructor() { }
  menuSelected: string = ''

  ngOnInit() {
  }

  select() {
    
  }
}
