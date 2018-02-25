import * as React from 'react';
import './App.css';
import { ConnectedTodoList } from './containers/ConnectedTodoList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ConnectedTodoList />
      </div>
    );
  }
}

export default App;
