import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

const Header = () => (
  <header className={style.header}>
    <h1>Header</h1>
    <ul>
      <li>
        <NavLink to="/">Main</NavLink>
      </li>
      <li>
        <NavLink to="/Auth">Auth</NavLink>
      </li>
      <li>
        <NavLink to="/Reg">Reg</NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
