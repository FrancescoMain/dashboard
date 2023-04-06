export interface Project {
    id: number,
    title: string,
    description: string,
    deadline: Date,
    company: string,
    assigned_to: string,
}

export interface ProjectsState {
    projects: Project[],
    searchQuery: string;
  }