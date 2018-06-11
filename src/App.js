import React from 'react';
import './App.css';
import Reviewer from './components/Reviewer';
import Editor from './components/Editor';
class App extends React.Component {
  constructor (){
    super();
    this.state= {
      surename: [
        {
          title: 'student',
          name: 'Redwan'
        },
        {
          title: 'student',
          name: 'sara'
        },
        {
          title: 'student',
          name: 'nura'
        },


      ],
      points: [
        {
          first: "Redwan",
          point: "30"
        },
        {
          second: "nura",
          point: "20"
        },
        {
          therid: "sara",
          point: "10"
        },
      ]
    }


  }
  render() {
    return (
      <div className="App">
        <h1>components for {this.props.name}</h1>
        <Reviewer surename={this.state.surename}/>
        <Editor points= {this.state.points} />

      </div>
    );
  }
}


export default App;
