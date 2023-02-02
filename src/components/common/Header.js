import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div class="header">
      <div class="header2">
        <nav class="gnb inner">
          <a href="index.html">
            <img class="logo" src={logo} alt="logo" />
          </a>
          <ul>
            <li class="on">
              <a href="index.html">종목추천</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
