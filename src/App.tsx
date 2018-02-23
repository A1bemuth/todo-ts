import * as React from 'react';
import './App.css';
import { TodoList } from './components/TodoList';

class App extends React.Component {
  render() {
    let items = [
      {checked: true, text: 'Some true text'},
      {checked: false, text: 'Wazzup'}
    ];

    return (
      <div className="App">
        <TodoList items={items}/>
      </div>
    );
  }
}

export default App;
