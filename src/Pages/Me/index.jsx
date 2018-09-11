import React, { Component } from 'react';

import s from './styles.css';
import Social from '../../components/Social';

class Me extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }


  render() {
    return (
      <div className={s.container}>
        <div className={s.left}>
            <Social/>
        </div>
        <div className={s.right}>

        </div>
      </div>
    );
  }
}

export default Me;
