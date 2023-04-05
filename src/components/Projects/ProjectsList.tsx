import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/store";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteProject } from "../../redux/projects/projectSlice";
import { useNavigate } from "react-router-dom";
import { Modal, ModalBody, ModalBox } from "./ProjectsListStyle";

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useAppSelector((state) => state.projects);
  // Quando si clicca sull'icona delete, si setta lo stato openModal a true -> si dà la classe show-modal al Modal
  const navigate = useNavigate();
  const handleDeleteProject = (projectId: number) => {
    dispatch(deleteProject(projectId));
  }
  
  return (
    <>
      <Modal>
        <ModalBox>
          Confirmation
        </ModalBox>
        <ModalBody>
          Eliminare davvero questo progetto?
        </ModalBody>
        <ModalBox>
          <button className="me-1">Sì</button>
          <button>Annulla</button>
        </ModalBox>
      </Modal>
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
                        <a onClick={() => navigate(`/projects/edit/${project.id}`)}>
                        <EditIcon style={{cursor: 'pointer'}}/>
                        </a>
                        <DeleteIcon style={{cursor: 'pointer'}} onClick={() => handleDeleteProject(project.id)}/>
                      </td>
                    </tr>
                  </>
                )
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Projects;
