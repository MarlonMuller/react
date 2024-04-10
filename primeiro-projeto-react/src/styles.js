import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ToDoList = styled.div`
    background: white;
    padding: 20px 30px;
    `

export const Input = styled.input`
border: 2px solid rgba(209, 211, 212, 0.4);
height: 40px;
border-radius: 5px;
margin-right: 10px;
`

export const Button = styled.button`
background: #8052EC;
border-radius: 5px;
font-weight: 900;
font-size: 17px;
line-height: 2px;
height: 40px;
border: none;
color: white;
`