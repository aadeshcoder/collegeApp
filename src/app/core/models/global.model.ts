export const AppRoutes = {
    STUDENT: "/app-view/student",
    DEPARTMENT:"/app-view/department",
    FACULTY:"/app-view/faculty"
}

export interface ITakenLeaves {
    "start_date": string,
    "end_date": string,
    "reason": string,
    "type_of_leave": string,
}

export interface IStudentList {
    id?: number
    name: string;
    department: string;
    head_of_department: string;
    leaves: number;
    date_of_join: string;
    date_of_birth: string;
    grades: string;
    semister: string;
    leaves_taken: ITakenLeaves[];
}

export interface IUpdatedLocationList {
    id?: number;
    name: string;
}