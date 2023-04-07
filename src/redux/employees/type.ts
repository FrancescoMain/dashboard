import { Project } from "../projects/type"

export interface Employee {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
    projects_assigned: Project[]
    role: string
}

interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    }
}

export interface EmployeesState {
    employees: Employee[],
    status: string,
    error: null
}

export const roles = ["Front-end developer", "Back-end Developer", "Full-stack Developer", "Project Manager", "Project Administrator", "CEO", "CO-Founder", "Flutter Dev", "Blockchain Dev", "Consulente HR", "Editor"];