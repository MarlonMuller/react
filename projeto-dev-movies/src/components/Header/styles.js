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

a {
    text-decoration: none;
    color: #ffffff;
}
`
