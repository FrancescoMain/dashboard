import styled from "styled-components"


export const Container = styled.div`
max-width: 70%;
width: 1200px;
margin: 0 auto;
display: flex;
justify-content: center;
`

export const Form = styled.form`
width: 400px;
min-height: 500px;
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

export const Input = styled.input`
border: 1px solid grey;
border-radius: 10px;
background-color: #eaeff1;
padding: .5rem 1rem;
margin-top: .5rem;
`

export const Button = styled.button`
background-color: #eaeff1;
padding: .5rem 1rem;
border-radius: 10px;
cursor: pointer;
border: 1px solid darkgrey;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export const SignIn = styled.a`
color: #009be5;
font-size: 1.8rem;
text-align: center;
width: 100%;
`