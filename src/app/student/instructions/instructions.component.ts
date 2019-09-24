import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CURRENT_CLIENT } from 'src/app/common/constants';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {
  CURRENT_CLIENT = CURRENT_CLIENT;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onStartTest(){
    this.router.navigate(["/exam"]);
  }

}
