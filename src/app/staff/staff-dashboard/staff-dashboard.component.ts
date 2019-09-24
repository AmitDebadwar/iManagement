import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet, monkeyPatchChartJsTooltip, monkeyPatchChartJsLegend } from 'ng2-charts';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { SectionLoaderService } from 'src/app/common/services/section-loader/section-loader.service';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.scss']
})
export class StaffDashboardComponent implements OnInit {
  isLoadingStats: boolean = false;


  public dbarChartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,

  };

  public barChartOptions: any = {
    responsive: true,
    
    scales: {
      yAxes: [
         
        
        {
        ticks: {
          steps: 10,
          stepValue: 10,
          max: 100,
          min: 0
        }
      }]
    }
  };
  public barChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  
  public barChartData: Array<ChartDataSets> = [
    { data: [], label: 'Zoology' },
    { data: [], label: 'Botany' }
  ];

  public pieChartOptions: any = {
    responsive: true
  };

  public pieChartLabels: Label[] = ['Download sales', 'In Store Sales', 'Mail Sales'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private sectionLoaderService: SectionLoaderService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();

  }

  ngOnInit() {
    this.loadData();
  }

  showStatistics(el: HTMLElement) {

    this.isLoadingStats = true;
    this.sectionLoaderService.show("analytica-loader");
    el.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {

      this.loadData();
      this.isLoadingStats = false;
      this.sectionLoaderService.hide("analytica-loader");
    }, (2000));
  }


  generateArray(min: number, max: number, length: number) {

    this.barChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    return Array.from({ length: length }, () => Math.floor(Math.random() * (max - min + 1)) + min);;
  }

  loadData() {
   

    this.barChartData = [
      { data: this.generateArray(65, 95, 7), label: 'Zoology' },
      { data: this.generateArray(55, 80, 7), label: 'Botany' }
    ];
  }

  onStatSelChange() {
     
    this.isLoadingStats = true;;


    setTimeout(() => {

      this.barChartData = [
        { data: this.generateArray(55, 75, 7), label: 'Zoology' },
        { data: this.generateArray(40, 66, 7), label: 'Botany' }
      ];
      this.isLoadingStats = false;

    }, 3000);
  }
}
