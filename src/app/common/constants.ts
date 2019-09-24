import { environment } from 'src/environments/environment';

export class Constants {
    public static SCREEN_TYPE: string;
    public static LOGGED_IN_USER : string;
}

export class URIs { 

    public static get GetAllToDos() {
        return environment.baseApi + "todo/all";
    }

    public static get GetSaveToDo() {
        return environment.baseApi + "todo/save";
    }

    
    public static get GetUpdateToDoUrl() {
        return environment.baseApi + "todo/update";
    }
}

export class CURRENT_CLIENT {
    public static SHORT_NAME: string;
    public static FULL_NAME: string;
    public static LOGO_PATH: string;
}



export const Pages = [
    { text: 'Instructions', path: '/instructions' },
    { text: 'Examination', path: '/exam' },
    { text: 'Test Summary', path: '/testsummery' },
    { text: 'Set Exam', path: '/setexam' },
    { text: 'Student Dashboard', path: '/student-dashboard' },
    { text: 'Staff Dashboard', path: '/staff-dashboard' },
    { text: 'Student Enrollment', path: '/student-enrollment' },
    { text: '', path: '' },
    { text: '', path: '' },
    { text: '', path: '' },
    { text: '', path: '' },
    { text: '', path: '' },
    { text: '', path: '' },
    { text: '', path: '' },
    { text: '', path: '' }
]
