import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/store';
import { useParams } from 'react-router-dom';
import { addProjectsToEmployees, getAllEmployees, removeProjectsToEmployees } from '../../../redux/employees/employeeSlice';
import { UpdateProjectState, assignEmployeeToProject, getAllProjects, removeEmployeeFromProject } from '../../../redux/projects/projectSlice';
import { Box, DetailsAvatar, DetailsContainer, DetailsHeader, DetailsList, DetailsName, ProjectsContainer, ProjectBox, RemoveProject } from "./ShowEmployeePageStyle";
import { generateRole } from '../../../utils/generateRole';
import { generateRandomColor } from '../../../utils/randomColor';
import { ToggleProjectsPayload, roles } from '../../../redux/employees/type';
import ClearIcon from '@mui/icons-material/Clear';

const ShowEmployeePage = () => {
  const dispatch = useDispatch();
  const employees = useAppSelector(getAllEmployees);
  const projects = useAppSelector(getAllProjects);
  const params = useParams();
  const employeeIndex = Number(params.id) - 1;
  let projectId = 0;
  

  const [widgets, setWidgets] = useState<string[]>([]);

  useEffect(() => {
    const newWidgets = [...employees[employeeIndex].projects_assigned?.map((project) => project.title)];
    setWidgets(newWidgets);
  }, [])

  const handleOnDrag = (e: React.DragEvent, widgetType:string, projectIndex: number) => {
    projectId = projectIndex + 1;
    e.dataTransfer.setData("widgetType", widgetType);
  }
  const handleOnDrop = (e: React.DragEvent) => {
    const widgetType = e.dataTransfer.getData("widgetType") as string;
    const project = projects.find(project => project.id === projectId);
    if (project && !widgets?.includes(project.title)) {
      const UpdateProjectState : UpdateProjectState = {employees: employees, employeeId: employeeIndex, project: project};
      const ToggleProjectPayload : ToggleProjectsPayload = {employeeId: employeeIndex, project: project};
      dispatch(addProjectsToEmployees(ToggleProjectPayload));
      dispatch(assignEmployeeToProject(UpdateProjectState));
      setWidgets([...widgets, widgetType]);
    } else {
      alert("Questo progetto è già presente");
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  }

  const handleRemoveProjectAssigned = (widget: string) => {
    const project = projects.find(project => project.title === widget);
    if (project) {
      const ToggleProjectPayload : ToggleProjectsPayload = {employeeId: employeeIndex, project: project};
      const UpdateProjectState : UpdateProjectState = {employees: employees, employeeId: employeeIndex, project: project};
      dispatch(removeProjectsToEmployees(ToggleProjectPayload));
      dispatch(removeEmployeeFromProject(UpdateProjectState));
      const filteredWidgets = widgets.filter((value) => value !== widget);
      setWidgets(filteredWidgets);
    }
  }

  return (
    <Box>
      <DetailsHeader style={{color: '#4c4c4c'}}>
        <h3>{employees[employeeIndex].name}</h3>
        <h4 style={{margin: '0'}}>{generateRole(employees[employeeIndex].role, roles)}</h4>
        <DetailsAvatar style={{backgroundColor: generateRandomColor()}} src="avatarImg.png"/>
      </DetailsHeader>
      <DetailsContainer>
        <div style={{display: 'flex'}}>
          <DetailsName>
            <li>Email:</li>
            <li>Phone:</li>
            <li>Website:</li>
            <li>Username:</li>
          </DetailsName>
          <DetailsList>
            <li>{employees[employeeIndex].email}</li>
            <li>{employees[employeeIndex].phone}</li>
            <li>{employees[employeeIndex].website}</li>
            <li>{employees[employeeIndex].username}</li>
          </DetailsList>
        </div>
        <div style={{display: 'flex'}}>
          <DetailsName>
            <li>Address street:</li>
            <li>City:</li>
            <li>Zipcode:</li>
          </DetailsName>
          <DetailsList>
            <li>{employees[employeeIndex].address.street}</li>
            <li>{employees[employeeIndex].address.city}</li>
            <li>{employees[employeeIndex].address.zipcode}</li>
          </DetailsList>
        </div>
      </DetailsContainer>
        <h4 style={{color: '#4c4c4c'}}>Projects working on:</h4>
        <hr />
      <ProjectsContainer>
        <div 
        style={{width: '60%', border: '1px solid grey', padding: '.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}
        onDragOver={handleDragOver}
        onDrop={(e) => handleOnDrop(e)}
        >
        {widgets.map((widget, index) => (
          <ProjectBox key={index}>
            <RemoveProject
            onClick={() => 
              handleRemoveProjectAssigned(widget)
            }
            >
              <ClearIcon style={{fontSize: '.8rem'}}/>
            </RemoveProject>
            {widget}
          </ProjectBox>
        ))}
        </div>
        <div style={{width: '50%', display: 'flex', justifyContent: 'center'}} >
          <div>
            <h5>Trascina i progetti che vuoi assegnare:</h5>
            {projects.length > 0 ? (projects.map((project, index) => (
              <ProjectBox
              key={project.id}
              draggable
              onDragStart={(e) => handleOnDrag(e, project.title, index)}
              >
                {project.title}
              </ProjectBox>
            ))) : (
              <small style={{textAlign: 'center'}}>Nessun progetto disponibile</small>
            )}
          </div>
        </div>
      </ProjectsContainer>
    </Box>
  )
}

export default ShowEmployeePage