import styled from "styled-components";

export const Container = styled.div`
width: 1300px;
max-width: 80%;
margin: 0 auto;
`

export const Row = styled.div`
display: flex;
flex-wrap: wrap;
`

export const Col = styled.div`
width: calc(100% / 5);
margin: 10px;
`

export const EmployeeCard = styled.div`
width: 100%;
min-height: 100px;
border: 1px solid grey;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
cursor: pointer;
`

export const EmployeeAvatar = styled.img`
max-width: 100%;

`