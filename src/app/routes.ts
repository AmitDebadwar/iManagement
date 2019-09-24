import { Routes } from "@angular/router";
import { InstructionsComponent } from './student/instructions/instructions.component';
import { ExamComponent } from './student/exam/exam.component';
import { ExamSummeryComponent } from './student/exam-summery/exam-summery.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { StaffDashboardComponent } from './staff/staff-dashboard/staff-dashboard.component';
import { EnrollmentComponent } from './staff/enrollment/enrollment.component';
import { ToDoComponent } from './common/components/to-do/to-do.component';
 
 
 
 
export const routes: Routes = [
    {
        path: '',
        component: ToDoComponent
    }, 
    {
        path:'instructions',
        component: InstructionsComponent
    },
    {
        path: 'exam',
        component: ExamComponent
    },
    {
        path: 'testsummery',
        component: ExamSummeryComponent
    },
    {
        path: 'setexam',
        loadChildren: "./staff/set-exam/set-exam.module#SetExamModule"
    },
    {
        path: 'student-dashboard',
        component: StudentDashboardComponent
    },
    {
        path: 'staff-dashboard',
        component: StaffDashboardComponent
    },
    {
        path: 'student-enrollment',
        component: EnrollmentComponent
    }


];