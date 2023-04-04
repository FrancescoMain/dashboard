import { User } from "../Auth/userType"

export interface Project {
    title: string,
    description: string,
    deadline: Date
    company: string,
    assigned_to: User[]
}