import styled from "styled-components";

export const Box = styled.div`
border: 1px solid darkgrey;
background-color: white;
width: 1000px;
min-height: 300px;
box-shadow: 0 5px 20px -15px black;
padding: 1rem;
position: relative;
`

export const DetailsHeader = styled.div`
height: 80px;
`

export const DetailsContainer = styled.div`
display: flex;
justify-content: space-between;
`

export const DetailsName = styled.ul`
width: 150px;
border-right: 1px solid grey;
color: #212121;
`

export const DetailsList = styled.ul`
margin-left: 1rem;
color: #7c7bad;
`

export const DetailsAvatar = styled.img`
max-width: 100%;
position: absolute;
top: 50px;
right: 50px;
`

export const ProjectBox = styled.div`
width: 150px;
height: 50px;
box-shadow: 0 5px 20px -15px black;
padding: .5rem;
border: 1px solid grey;
margin-bottom: .5rem;
text-align: center;
margin-right: .5rem;
`

export const ProjectsContainer = styled.div`
display: flex;
`
