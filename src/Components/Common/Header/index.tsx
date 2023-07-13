import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';
import { getUserEmail, getUserToken } from '../../../store/auth/selectors';
import { resetUserData } from '../../../store/auth';

const Header = () => {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  const token = useSelector(getUserToken);

  const logOutHeandler = () => {
    dispatch(resetUserData());
  };
  return (
    <header className={style.header}>
      <h1>Header</h1>
      <ul>
        <li>
          <NavLink to="/">Main</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>

        {token && <span>{email}</span>}
        {token ? (
          <button type="button" onClick={logOutHeandler}>
            LogOut
          </button>
        ) : (
          <>
            <li>
              <NavLink to="/Auth">Auth</NavLink>
            </li>
            <li>
              <NavLink to="/Reg">Reg</NavLink>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
