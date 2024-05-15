import styled from 'styled-components'

export const Container = styled.div`
z-index: 99;
position: fixed;
top:0;
display: flex;
padding: 10px 50px;
justify-content: space-between;
align-items: center;


img {
    width: 25%;
}
`

export const Menu = styled.ul`
display: flex;
list-style: none;
gap: 15px;
`

export const Li = styled.li`
cursor: pointer;
font-weight: 600;
font-size: 28px;
position: relative;

a {
    text-decoration: none;
    color: #ffffff;
}

&::after{
    content: '';
    position: absolute;
    width: 300px;
    height: 3px;
    width: ${(props)=>(props.isActive? '100%' : 0)};
    background-color: green;
    bottom: -10px;
    transition: width 0.5s ease-in-out;
    left: 50%;
    transform: translateX(-50%);
}
&:hover::after{
    width:100%;
}
`
