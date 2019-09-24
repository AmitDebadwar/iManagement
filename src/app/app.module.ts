import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructionsComponent } from './student/instructions/instructions.component';
import { ExamComponent } from './student/exam/exam.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExamSummeryComponent } from './student/exam-summery/exam-summery.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StaffDashboardComponent } from './staff/staff-dashboard/staff-dashboard.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { EnrollmentComponent } from './staff/enrollment/enrollment.component';
import { ChartsModule } from 'ng2-charts';
import { IdCardComponent } from './staff/enrollment/id-card/id-card.component';
import { SectionLoaderComponent } from './common/services/section-loader/section-loader.component';
import { initApp } from './common/services/providers/app-init.provider';
import { ConfigLoaderService } from './common/services/config-loader.service';
import { ToDoComponent } from './common/components/to-do/to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructionsComponent,
    ExamComponent,
    HeaderComponent,
    FooterComponent,
    ExamSummeryComponent,
    StaffDashboardComponent,
    StudentDashboardComponent,
    EnrollmentComponent,
    IdCardComponent,
    SectionLoaderComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
    NgbModule,
    ChartsModule

  ],
  providers: [
    ConfigLoaderService,

    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      multi: true,
      deps:[HttpClient, ConfigLoaderService]
    }
  ],
  entryComponents:[IdCardComponent], 
  bootstrap: [AppComponent]
})
export class AppModule { }
