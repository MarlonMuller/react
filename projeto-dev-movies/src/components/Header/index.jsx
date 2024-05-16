import {Container, Menu, Li} from './styles'
import Logo from '../../assets/logo.png'
import {Link, useLocation} from 'react-router-dom'
import { useState } from 'react'

function Header (){
    const[changeBackground, setchangeBackground] = useState(false)
    const { pathname } = useLocation()

    window.onscroll = () => {
        if(!changeBackground && window.pageYOffset > 150){
            setchangeBackground(true)
        }
        if(changeBackground && window.pageYOffset <= 150){
            setchangeBackground(false)
        }
    }

    return (
        <Container changeBackground={changeBackground}>
            <img src={Logo} />
            <Menu>
                <Li isActive={pathname === '/'}>
                    <Link to="/">Home</Link>
                </Li>
                <Li isActive={pathname.includes('filmes')}>
                    <Link to="/filmes">Filmes</Link>
                </Li>
                <Li isActive={pathname.includes('series')}>
                    <Link to="/series">Séries</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header
