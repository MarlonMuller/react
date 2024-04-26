import Logo from '../../assets/logo.png'

function Header (){
    return (
        <div>
            <h1>Header</h1>
            <img src={Logo} alt="logo-dev-filmes" />
        </div>
    )
}

export default Header;