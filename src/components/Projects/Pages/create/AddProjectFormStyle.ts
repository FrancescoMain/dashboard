import styled from "styled-components";

export const Box = styled.div`
display: flex;
justify-content: center;
`

export const Form = styled.form`
width: 500px;
min-height: 500px;
border: 1px solid grey;
background-color: white;
padding: 2rem;
display: flex;
flex-direction: column;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export const Input = styled.input`
border: 1px solid grey;
border-radius: 10px;
background-color: #eaeff1;
padding: .5rem 1rem;
margin-top: .5rem;
width: 200px;
`

export const Textarea = styled.textarea`
resize: none;
margin-top: .5rem;
background-color: #eaeff1;
border-radius: 10px;
`

export const Button = styled.button`
background-color: #eaeff1;
padding: .5rem 1rem;
border-radius: 10px;
cursor: pointer;
border: 1px solid darkgrey;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export const Select = styled.select`
padding: .5rem 1rem;
background: #eaeff1;
margin-top: .5rem;
border-radius: 10px;
`

export const ListBtn = styled.a`
color: #009be5;
font-size: 1.8rem;
text-align: center;
width: 100%;
text-decoration: underline;
cursor: pointer;
`