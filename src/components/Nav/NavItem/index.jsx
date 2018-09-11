import React from 'react';
import s from './styles.css';

const NavItem = ({isActive, name}) => {
  return (
    <div>
      <div className={s.nav}>
        <a
          className={[s.item, isActive ? s['item-active'] : null].join(' ')}
          onClick={''}
        >
          {name}
        </a>
      </div>
    </div>
  );
};

export default NavItem;
