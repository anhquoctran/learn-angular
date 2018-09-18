import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './word.component.html',
    selector: 'app-word',
    styleUrls: [
        './word.component.css'
    ]
})

export class WordComponent implements OnInit {
    constructor() { }
    name = '';
    isHighlighted = false;
    ngOnInit() {}
}
