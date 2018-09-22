import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-h-nav',
  templateUrl: './h-nav.component.html',
  styleUrls: ['./h-nav.component.css']
})
export class HNavComponent implements OnInit {
  
  constructor() { }
  @Input() AppName:string;

  ngOnInit() {
  }

}
