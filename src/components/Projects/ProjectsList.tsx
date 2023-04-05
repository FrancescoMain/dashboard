import { useAppSelector } from "../../redux/store";

const Projects = () => {
  const projects = useAppSelector((state) => state.projects);
  return (
    <div>
      {projects.map((project) => (
        <div>{project.title}</div>
      ))}
    </div>
  );
};

export default Projects;
