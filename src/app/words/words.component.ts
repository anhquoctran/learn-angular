import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css'],
})
export class WordsComponent implements OnInit {
  constructor() {}
  newEn = '';
  newVn = '';
  inputFind = '';

  public static arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true },
  ];

  optionFilter = [
    { val: 0, name: 'Sort by', status: false },
    { val: 1, name: 'All', status: true },
    { val: 2, name: 'Remembered only', status: true },
    { val: 3, name: "Don't remembered only", status: true },
  ];

  viewSize = [10, 20, 50, 100];

  arrDisplay = [];

  selectedValue = 1;

  ngOnInit() {
    this.arrDisplay = WordsComponent.arrWords;
  }

  addWord(): void {
    if (this.newEn === '' || this.newVn === '') return;
    WordsComponent.arrWords.push({
		id: WordsComponent.arrWords.length + 1,
		en: this.newEn,
		vn: this.newVn,
		memorized: false,
    });
    this.newVn = '';
    this.newEn = '';
  }

  deleteWord(id: number): void {
    let index = WordsComponent.arrWords.findIndex(w => w.id === id);
    WordsComponent.arrWords.splice(index, 1);
  }

  filterWords(): void {
    if (
      this.inputFind !== '' ||
      this.inputFind != undefined ||
      this.inputFind
    ) {
      var result = WordsComponent.arrWords.filter(
        word =>
          word.en.toLowerCase().indexOf(this.inputFind) > -1 ||
          word.vn.toLowerCase().indexOf(this.inputFind),
      );

      this.arrDisplay = [];
      this.arrDisplay.unshift(result);
    } else {
      this.arrDisplay = WordsComponent.arrWords;
    }
  }

  setRemember(id: number, status: boolean): void {
    let index = _.findIndex(WordsComponent.arrWords, w => w.id == id);
    WordsComponent.arrWords[index].memorized = status;
  }
}