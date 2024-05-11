import {Container, Menu, Li} from './styles'
import Logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

function Header (){
    return (
        <Container>
            <img src={Logo} />
            <Menu>
                <Li>
                    <Link to="/">Home</Link>
                </Li>
                <Li>
                    <Link to="/filmes">Filmes</Link>
                </Li>
                <Li>
                    <Link to="/series">Séries</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header
