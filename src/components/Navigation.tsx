import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'navbar-item is-active' : 'navbar-item')}
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={({ isActive }) => (isActive ? 'navbar-item is-active' : 'navbar-item')}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
