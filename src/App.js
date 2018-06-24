import React from 'react';
import './App.css';
import Markdown from 'react-markdown'

const name = "Redwan";
const text = `Hello There Obi Wan konobi!
  how are you to day
  i'm fine and you
  what 's you name my name is ${name}'
`


class App extends React.Component{
  constructor(props){
    super(props);
    this.handleChange= this.handleChange.bind(this);
    this.state = {text: text};
  }
  handleChange(event){
    this.setState({text:event.target.value})
  }

  render() {
    return (
      <div className ="App" >
        <div>
          <header className ="App-header">
            <h2>Free Code Camp Project</h2>
            <h3>Front End Libraries Projects-Build a Markdown Previewer</h3>
          </header>
        </div>

          <textarea id="Editor" value = {this.state.text} onChange ={this.handleChange} >
          </textarea>
          <div id='Previewer' >
            <Markdown
              escapeHtml = {true}
              source = {this.state.text}
              />
          </div>
      </div>
    );
  }
}

export default App;
