import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  constructor() {}
  newEn = '';
  newVn = '';
  inputFind = '';

  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];

  arrDisplay = []

  ngOnInit() {
	  this.arrDisplay = this.arrWords
  }
  addWord(): void {
    if (this.newEn === '' || this.newVn === '') return;
    this.arrWords.unshift({
      id: this.arrWords.length + 1,
      en: this.newEn,
      vn: this.newVn,
      memorized: false
    });
    this.newVn = '';
    this.newEn = '';
  }

  deleteWord(id: number) {
    let index = this.arrWords.findIndex(w => w.id === id);
    this.arrWords.splice(index, 1);
  }

  filterWords(): void {
	if(this.inputFind !== '' || this.inputFind != undefined || this.inputFind) {
		var result = _.filter(this.arrWords, function(w) {
			return w.en.toLowerCase().indexOf(this.inputFind) > -1 || w.vn.toLowerCase().indexOf(this.inputFind) > -1;
	  	}.bind(this));

	  this.arrDisplay.splice(0, this.arrDisplay.length);
	  this.arrDisplay.unshift(result);
	} else {
		this.arrDisplay = this.arrWords;
	}
  }

  setRemember(id: number, status: boolean): void {
    let index = _.findIndex(this.arrWords, w => w.id == id);
    this.arrWords[index].memorized = status;
  }
}
