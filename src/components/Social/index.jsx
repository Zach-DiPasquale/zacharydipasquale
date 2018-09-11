import React, { Component } from 'react';

import ig from '../../images/ig.png'
import git from '../../images/GitHub-Mark-Light-64px.png'
import lkdin from '../../images/In-White-89px-TM.png'

import s from './styles.css';

const Social = () => {
  return (
    <div className={s.social}>
        <div className={s.srow}>
          <a href="https://www.instagram.com/zdepo/" target="_blank" >
            <img className={[s.ig, s['social-img']].join(' ')} src={ig} alt="Zachary DiPasquale - Instagram" />
          </a>
          <a href="https://github.com/Zach-DiPasquale" target="_blank" >
            <img className={[s.github, s['social-img']].join(' ')} src={git} alt="Zachary DiPasquale - Github" />
          </a>
          <a href="https://www.linkedin.com/in/ZacharyDiPasquale" target="_blank" >
            <img className={[s.in, s['social-img']].join(' ')} src={lkdin} alt="Zachary DiPasquale - Linkedin" />
          </a>
        </div>
    </div>
  );
}

export default Social;
