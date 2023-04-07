import React from 'react'
import { EmployeeAvatar, EmployeeCard } from './EmployeesStyle'
import { Employee, roles } from '../../redux/employees/type'
import { generateRandomColor } from '../../utils/randomColor'
import { useNavigate } from 'react-router-dom'
import { generateRole } from '../../utils/generateRole'

interface Props {
  employee: Employee
}

const EmployeeItem = ({employee} : Props) => {
  const navigate = useNavigate();

  return (
    <a onClick={() => navigate(`/employees/details/${employee.id}`)}>
      <EmployeeCard>
        <EmployeeAvatar style={{backgroundColor: generateRandomColor()}} src='avatarImg.png'/>
        <div style={{padding: '.5rem'}}>
        <h4>{employee.name}</h4>
        <p style={{fontSize: '.9rem'}}>{employee.email}</p>
        <p style={{fontSize: '.9rem'}}>{employee.phone}</p>
        <h5>{generateRole(employee.role, roles)}</h5>
        </div>
      </EmployeeCard>
    </a>
  )
}

export default EmployeeItem