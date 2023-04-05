import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/store";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteProject } from "../../redux/projects/projectSlice";

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useAppSelector((state) => state.projects);
  console.log(projects);

  const handleDeleteProject = (projectId: number) => {
    dispatch(deleteProject(projectId));
  }
  
  return (
    <div className="table-wrapper">
      <table className="fl-table">
        <thead>
          <tr>
              <th>Title</th>
              <th>Deadline</th>
              <th>Company</th>
              <th>Assigned to</th>
              <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {projects.map((project) => {
              return (
                <>
                  <tr>
                    <td>{project.title}</td>
                    <td>{project.deadline.toLocaleDateString()}</td>
                    <td>{project.company}</td>
                    <td>{project.assigned_to}</td>
                    <td><DeleteIcon style={{cursor: 'pointer'}} onClick={() => handleDeleteProject(project.id)}/></td>
                  </tr>
                </>
              )
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;
