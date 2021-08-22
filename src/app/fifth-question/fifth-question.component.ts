import { Component, OnInit } from '@angular/core';
import { YearService } from '../year.service';

@Component({
  selector: 'app-fifth-question',
  templateUrl: './fifth-question.component.html',
  styleUrls: ['./fifth-question.component.scss'],
})
export class FifthQuestionComponent implements OnInit {

  message1: string = "По вам скучает очень близкий человек, которого больше нет в мире живых.";
  message2: string = "По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка.";
  message3: string = "По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей.";

  message;
  year;

  constructor(private yearSrv: YearService) {}

  ngOnInit() {
    this.year = this.yearSrv.data;

    if(this.year >= 1986) {
      this.message = this.message1
    } else if(this.year >= 1976 && this.year <= 1985) {
      this.message = this.message2
    } else {
      this.message = this.message3
    }
  }
}