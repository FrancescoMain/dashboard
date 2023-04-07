import React, {useState} from 'react'
import { useAppSelector } from '../../redux/store'
import { getAllEmployees } from '../../redux/employees/employeeSlice'
import { useParams } from 'react-router-dom';
import { Box, DetailsAvatar, DetailsContainer, DetailsHeader, DetailsList, DetailsName, ProjectsContainer, ProjectBox } from './ShowEmployeePageStyle';
import { generateRole } from '../../utils/generateRole';
import { roles } from '../../redux/employees/type';
import { generateRandomColor } from '../../utils/randomColor';
import { getAllProjects } from '../../redux/projects/projectSlice';

const ShowEmployeePage = () => {
  const employees = useAppSelector(getAllEmployees);
  const projects = useAppSelector(getAllProjects);
  const params = useParams();
  const employeeIndex = Number(params.id) - 1;
  
  const [widgets, setWidgets] = useState<string[]>([...employees[employeeIndex].projects_assigned.map((project) => project.title)]);
  const handleOnDrag = (e: React.DragEvent, widgetType:string) => {
    e.dataTransfer.setData("widgetType", widgetType);
  }
  const handleOnDrop = (e: React.DragEvent) => {
    const widgetType = e.dataTransfer.getData("widgetType") as string;
    setWidgets([...widgets, widgetType]);
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
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
        onDrop={handleOnDrop}
        >
        {widgets.map((widget, index) => (
          <>
          <ProjectBox key={index}>
            {widget}
          </ProjectBox>
          </>
        ))}
        </div>
        <div style={{width: '50%', display: 'flex', justifyContent: 'center'}} >
          <div>
            <h5>Trascina i progetti che vuoi assegnare:</h5>
            {projects.length > 0 ? (projects.map((project) => (
              <ProjectBox
              key={project.id}
              draggable
              onDragStart={(e) => handleOnDrag(e, project.title)}
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