import React, {useEffect} from 'react'
import { Col, Container, Row } from './EmployeesStyle'
import {useSelector, useDispatch} from "react-redux";
import { fetchEmployees, getAllEmployees, getEmployeeError, getEmployeesStatus } from '../../../redux/employees/employeeSlice';
import { AppDispatch } from '../../../redux/store';
import EmployeeItem from './EmployeeItem';

const EmployeesList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const employees = useSelector(getAllEmployees);
  const employeesStatus = useSelector(getEmployeesStatus);
  const error = useSelector(getEmployeeError);

  useEffect(() => {
    if (employeesStatus === 'idle') {
      dispatch(fetchEmployees())
    }
  }, [employeesStatus, dispatch])

  return (
    <Container>
      <Row>
        {employeesStatus === 'loading' ? (
          <p>Loading..</p>
          ) : employeesStatus === 'failed' ? (
          <p>{error}</p>
          ) : (
            employees.map((employee, index) => {
              return (
              <Col>
              <EmployeeItem key={index} employee={employee}/>
              </Col>
              )
            })
          )
        }
      </Row>
    </Container>
  )
}

export default EmployeesList