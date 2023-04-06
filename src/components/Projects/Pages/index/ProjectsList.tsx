import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../redux/store";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { deleteProject } from "../../../../redux/projects/projectSlice";
import { useNavigate } from "react-router-dom";
import { DeleteBtn, Modal, ModalBody, ModalBox } from "./ProjectsListStyle";
import { useState } from "react";

const Projects = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const projects = useAppSelector((state) => state.projects);
  const handleDeleteProject = (projectId: number) => {
    dispatch(deleteProject(projectId));
    // setIsDeleteModalOpen(false);
  }
  
  // const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  // const openDeleteModal = () => {
  //   setIsDeleteModalOpen(true);
  //   console.log("ciao");
  // }
  // const closeDeleteModal = () => {
  //   setIsDeleteModalOpen(false);
  //   console.log("ciao2");
  // }
  // const modalContent = (projectId: number) => {
  //   return (
  //     <>
  //     <ModalBox>Confirmation</ModalBox>
  //     <ModalBody>Eliminare davvero questo progetto?</ModalBody>
  //     <ModalBox>
  //       <button onClick={() => handleDeleteProject(projectId)} className="me-1">Sì</button>
  //       <button onClick={closeDeleteModal}>Annulla</button>
  //     </ModalBox>
  //     </>
  //   )
  // };
  
  return (
    <>
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
                        <DeleteBtn onClick={() => handleDeleteProject(project.id)}>                 
                          <DeleteIcon style={{cursor: 'pointer'}}/>
                          {/* {
                            isDeleteModalOpen ? (
                              <Modal className="modal-overlay">
                                {modalContent(project.id)}
                              </Modal>
                            ) : (
                              <Modal className="show-modal modal-overlay">
                                {modalContent(project.id)}
                              </Modal>
                            )
                          } */}
                        </DeleteBtn>
                        <a onClick={() => navigate(`/projects/details/${project.id}`)}>
                          <VisibilityIcon style={{cursor: 'pointer'}}/>
                        </a>
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
