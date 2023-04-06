import styled from "styled-components";

export const Container = styled.div`
width: 1200px;
max-width: 80%;
margin: 0 auto;
`

export const Modal = styled.div`
background-color: white;
text-align: start;
width: 500px;
min-height: 100px;
position: absolute;
top: 20%;
left: 50%;
transform: translate(-50%, -50%);
`

export const ModalBody = styled.div`
padding: 1rem;
font-size: .9rem;
border-top: 1px solid lightgrey;
border-bottom: 1px solid lightgrey;
`

export const ModalBox = styled.div`
padding: 1rem;
font-size: .9rem;
`

export const DeleteBtn = styled.button`
background-color: white;
border: none;
`

export const SearchInput = styled.input`
border: none;
background-color: unset;
width: 300px;
border-bottom: 1px solid grey;
font-size: 1rem;
`
