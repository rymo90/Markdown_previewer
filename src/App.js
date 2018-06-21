import React from 'react';
import './App.css';
import Reviewer from './components/Reviewer';
import Editor from './components/Editor';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>components </h1>
        <Reviewer />
        <Editor />

      </div>
    );
  }
}


export default App;
