import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/store";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteProject } from "../../redux/projects/projectSlice";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useAppSelector((state) => state.projects);
  const navigate = useNavigate();
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
                    <td>
                      <DeleteIcon style={{cursor: 'pointer'}} onClick={() => handleDeleteProject(project.id)}/>
                      
                      <a onClick={() => navigate(`/projects/edit/${project.id}`)}>
                      <EditIcon style={{cursor: 'pointer'}}/>
                      </a>
                    </td>
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
