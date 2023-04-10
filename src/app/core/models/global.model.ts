export const AppRoutes = {
    STUDENT: "/app-view/student",
    DEPARTMENT: "/app-view/department",
    FACULTY: "/app-view/faculty"
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

export interface IFaculty {
    name: string,
    designation: string,
    date_of_join: string,
    experience: string,
    subject: string,
    expanded: boolean
}

//TODO: Interface for testing
export interface IDummyDept {
    id: number;
    name: string;
    expanded: boolean
}

export interface IDummyStudent {
    id: number
    name: string;
    department: string;
    head_of_department: string;
    leaves: number;
    date_of_join: string;
    date_of_birth: string;
    grades: string;
    semister: string;
    leaves_taken: ITakenLeaves[];
    dummyLocationId: number;
}

export interface IDummyLocationFaculty {
    id: number;
    name: string;
    dummyFaculties: IDummyFaculty[];
}

export interface IDummyFaculty {
    id: number;
    name: string;
    designation: string;
    dummyDeptId: number;
    dummyLocationId: number;
}

export interface IDummyLocation {
    id: number;
    name: string;
}
