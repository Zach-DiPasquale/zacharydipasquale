import React, { Component } from 'react';

import Social from '../../components/Social'

import s from './styles.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }


  render() {
    return (
      <div>
        <div className={s.row} >
          <div className={s.col} >
              <div className={s.block} >
                  <div>
                      <h1 className={[s.content, s.name].join(' ')}>Zachary</h1>
                      <h1 className={[s.content, s.name].join(' ')}>DiPasquale</h1>
                      <p className={[s.content, s.school].join(' ')}>
                        RIT 2020
                      </p>
                      <p className={[s.content, s.degree].join(' ')}>
                        Pursing a B.S. in<br/>
                        Software Engineering<br/>
                        Minor in Business Administration
                      </p>
                  </div>
                  
                  
              </div>
              
          </div>
        </div>
        <div className={s.social}>
          <Social/>
        </div>
      </div>
    );
  }
}

export default Home;
