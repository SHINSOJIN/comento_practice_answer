import logo from '../../assets/images/logo.png'

const Header = () => {
    const pathname = window.location.pathname
    return (
        <div className="header">
            <div className="header2">
                <nav className="gnb inner"><a href="/"><img className="logo" src={logo} alt="logo"/></a>
                    <ul>
                        <li className={pathname === '/'? 'on': ''}><a href="/">종목추천</a></li>
                        <li className={pathname === '/login'? 'on': ''}><a href="/login">로그인</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};

export default Header;