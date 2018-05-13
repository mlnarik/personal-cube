import * as React from 'react';
import './App.scss';
import { PageNavWrapper } from './PageNav';


class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <PageNavWrapper />
      </div>
    );
  }
}

export default App;
