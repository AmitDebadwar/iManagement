import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pages, CURRENT_CLIENT, Constants } from '../common/constants';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('loginPopup', { static: true }) loginPopup: ViewChild;
  loginName : string;
  instituteName = CURRENT_CLIENT.SHORT_NAME;
  pages = Pages;
  todayDate = new Date();
  constructor(private modalService : NgbModal) { }

  ngOnInit() {
    
    if(!Constants.LOGGED_IN_USER){
      this.modalService.open(this.loginPopup, {
        backdrop: "static",
        keyboard : false
      })
      .result.then((result) => {
       Constants.LOGGED_IN_USER =  result ? this.loginName : "";
      }, (reason) => {
         
      });
    }

  }

}
