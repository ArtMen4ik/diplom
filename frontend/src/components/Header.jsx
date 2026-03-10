import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="logo">
          Артфлекс<span>22</span>
        </div>

        <nav className="nav">
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/services">Услуги</NavLink>
          <NavLink to="/portfolio">Портфолио</NavLink>
          <NavLink to="/request">Заявка</NavLink>
          <NavLink to="/contacts">Контакты</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
