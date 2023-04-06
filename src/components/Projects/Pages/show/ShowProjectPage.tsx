import React, {useEffect} from 'react'
import { Box, DetailsBox, DetailsHeader, DetailsList, DetailsName, ProjectDescription } from './ShowProjectPageStyle'
import { Project } from '../../../../redux/projects/type'
import { useParams } from 'react-router'
import { useAppSelector } from '../../../../redux/store'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ShowProjectPage = () => {
  const projects = useAppSelector((state) => state.projects.projects);
  const params = useParams();
  const projectIndex = Number(params.id) - 1;

  return (
    <Box>
      <DetailsHeader>
        <StarBorderIcon style={{fontSize: '2rem', marginRight: '1rem'}}/>
        <h2 style={{color: '#4c4c4c'}}>Project: {projects[projectIndex].title}</h2>
      </DetailsHeader>
      <DetailsBox>
        <DetailsName>
          <li>Azienda:</li>
          <li>Scadenza:</li>
          <li>Assegnato a:</li>
        </DetailsName>
        <DetailsList>
          <li>{projects[projectIndex].company}</li>
          <li>{projects[projectIndex].deadline.toLocaleDateString()}</li>
          <li>{projects[projectIndex].assigned_to}</li>
        </DetailsList>
      </DetailsBox>
      <ProjectDescription>
        <h4 style={{color: '#4c4c4c'}}>Descrizione:</h4>
        <hr />
        <p>{projects[projectIndex].description}</p>
      </ProjectDescription>
    </Box>
  )
}

export default ShowProjectPage