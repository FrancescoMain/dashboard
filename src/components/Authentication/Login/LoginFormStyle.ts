import styled from "styled-components";

export const Form = styled.form`
width: 400px;
min-height: 300px;
border: 1px solid grey;
border-radius: 10px;
background-color: white;
padding: 2rem;
display: flex;
flex-direction: column;
align-items: start;
text-align: start;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export const LoginFailed = styled.div`
background-color: #f7dfdf;
color: #c05850;
border: 1px solid #eedee0;
font-size: .8rem;
padding: .5rem;
border-radius: 2px;
`

export const Welcome = styled.p`
font-size: 2rem;
font-weight: 600;
`

export const Username = styled.span`
color: #009be5;
font-weight: 800;
`