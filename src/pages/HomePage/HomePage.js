import React, { PureComponent } from 'react';

import css from './HomePage.css';

export default class HomePage extends PureComponent {
  render() {
    return (
      <div className={css.root}>
        {/* <div className={css.devImage} /> */}
        <h1 className={css.header}>
          Hi, I&apos;m{' '}
          <span className={css.highlight}>
            Mani
            <span role="img" aria-label="glasses">
              👓
            </span>
          </span>
        </h1>
        <p>
          Mobile and Front End Developer | UI UX | Web Designer | Foodie | Tech Enthusiastic |
          Developer #DBS | Proud Indian
        </p>
        <div className={css.iconsSocial}>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/immnk">
            <i className="fab fa-github" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/manimnk">
            <i className="fab fa-twitter" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://stackoverflow.com/story/manikantamnk"
          >
            <i className="fab fa-stack-overflow" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://dev.to/immnk">
            <i className="fab fa-dev" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/manikantatankala"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a href="#/more">
            <i className="fas fa-angle-double-right" />
          </a>
        </div>
      </div>
    );
  }
}
