import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-summery',
  templateUrl: './exam-summery.component.html',
  styleUrls: ['./exam-summery.component.scss']
})
export class ExamSummeryComponent implements OnInit {
  isShowExlplaination : boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
