import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IdCardComponent } from './id-card/id-card.component';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss']
})
export class EnrollmentComponent implements OnInit {

  constructor(private modalService : NgbModal) { }

  ngOnInit() {
  }

  showIdCard(){
    this.modalService.open(IdCardComponent, {
      windowClass:'id-card-modal'
    });
  }
}
