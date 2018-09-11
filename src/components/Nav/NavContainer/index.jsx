import React from 'react';
import s from './styles.css';

const NavContainer = (props) => {
  return (
    <div className={s.container}>
        {props.children}
    </div>
  );
};

export default NavContainer;
