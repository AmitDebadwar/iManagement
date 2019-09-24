import { Component, OnInit, Input } from '@angular/core';
import { SectionLoaderService } from './section-loader.service';




@Component({
  selector: 'i-section-loader',
  templateUrl: './section-loader.component.html',
  styleUrls: ['./section-loader.component.scss']
})
export class SectionLoaderComponent implements OnInit {
  showSectionLoader : boolean;
  @Input("name") name : string;
  @Input("isChildPage") isChildPage: boolean

  constructor(private sectionLoaderService : SectionLoaderService) { }

  ngOnInit() {
    this.sectionLoaderService.show("analytica-loader");
    if (!this.name) throw ("Loader must have a 'name' attribute.");
    this.sectionLoaderService._register(this, this.isChildPage);
  }
 
  

}
