import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Constants, CURRENT_CLIENT } from '../common/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  instituteName = CURRENT_CLIENT.SHORT_NAME;

  constructor() { }

  ngOnInit() {}

}
