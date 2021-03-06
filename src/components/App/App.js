import React, { PureComponent, Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/HomePage';

import css from './App.css';

const MoreInfoPage = React.lazy(() => {
  return import(/* webpackChunkName: 'MoreInfo' */ '../../pages/MoreInfoPage');
});

class App extends PureComponent {
  render() {
    return (
      <div className={css.root}>
        <Suspense fallback={<div>Loading...</div>}>
          <HashRouter>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/more" component={MoreInfoPage} />
            </Switch>
          </HashRouter>
        </Suspense>
      </div>
    );
  }
}

export default hot(App);
