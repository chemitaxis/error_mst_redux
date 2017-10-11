import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connectReduxDevtools } from 'mobx-state-tree/middleware/redux';
import { types, destroy } from 'mobx-state-tree';

const Folder = types
  .model('Folder', {
    id: types.string,
    idUser: types.string,
    name: types.maybe(types.string)
  })
  .views(self => ({})) // eslint-disable-line
  .actions(self => ({
    remove() {
      destroy(self);
    }
  }));

const folderStore = Folder.create({
  id: '1',
  idUser: '1',
  name: 'Example'
});

connectReduxDevtools(require('remotedev'), folderStore);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
