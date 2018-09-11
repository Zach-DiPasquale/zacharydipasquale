import React, { Component } from 'react';

import s from './styles.css';
import Social from '../../components/Social';

class School extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }


  render() {
    return (
      <div className={s.container}>
        <div className={s.left}>
            
        </div>
        <div className={s.right}>
            <Social/>
        </div>
      </div>
    );
  }
}

export default School;
