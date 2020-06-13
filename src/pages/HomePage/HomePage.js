import React, { PureComponent } from 'react';

import css from './HomePage.css';

export default class HomePage extends PureComponent {
  render() {
    return (
      <div className={css.root}>
        Hello home
        <a href="#/more">go</a>
      </div>
    );
  }
}
