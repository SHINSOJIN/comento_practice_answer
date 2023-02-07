import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className='header'>
      <div className='header2'>
        <nav className='gnb inner'>
          <a href='/'>
            <img className='logo' src={logo} alt='logo' />
          </a>
          <ul>
            <li className='on'>
              <a href='/'>종목추천</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
