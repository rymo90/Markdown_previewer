import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount(){
    this.timerID= setInterval(
      () => this.tick(), 1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerID)
  }
  tick(){
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}</h2>
    </div>
    );
  }
}
class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = {isToggleOn:true};
    // this binding is necessarey to make 'this' work in the callback
    this.handelsomting = this.handleClick.bind(this);
  }
  render() {
    return (
      <button onClick={this.handelsomting}>{this.state.isToggleOn? 'ON': 'OFF'}</button>
    );
  }
  handleClick(){
    this.setState(prevState =>({
      isToggleOn: !prevState.isToggleOn
    }));
  }
}
class LoginControl extends React.Component {
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick= this.handleLogoutClick.bind(this);
    this.state= {isLoggedIn: false}
  }
  handleLoginClick(){
    this.setState({isLoggedIn:true})
  }
  handleLogoutClick(){
    this.setState({isLoggedIn:false})
  }
  render(){
    const isLoggedIn= this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button= <LogoutButton onClick = {this.handleLogoutClick} />;
    }else{
      button= <LoginButton onClick =  {this.handleLoginClick} />;
    }
    return (
      <div>
        <Greeting isLoggedIn = {isLoggedIn} />
        {button}
      </div>
    );
  }

}
function LoginButton(props){
  return (
    <button onClick={props.onClick}>Login</button>
  );
}
function LogoutButton(props){
  return (
    <button onClick= {props.onClick}>Logout</button>
  )
}
function UserGreeting(props){
  return <h1>Welcome back! {props.name}</h1>;
}
function GuestGreeting(props){
  return <h1>Please sing up.</h1>;
}
function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting name={'Redwan'} />;
  }
  return <GuestGreeting />;
}
function Mailbox(props){
  const unreadMessages= props.unreadMessages;
  return(
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length >0 &&
        <h2>You have {unreadMessages.length} unread messages.</h2>
      }
    </div>
  );
}
class Page extends React.Component{
  constructor(props){
    super(props);
    this.state= {showWarning: true};
    this.handeToggleClick = this.handeToggleClick.bind(this);
  }
  handeToggleClick(){
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render(){
    return (
      <div>
        <WarningBanner warn={this.state.showWarning}/>
        <button onclick= {this.handeToggleClick}>
          {this.state.showWarning? 'Hide': 'show'}
        </button>
      </div>
    );
  }
}
function WarningBanner(props){
  if (!props.warn) {
    return null;
  }
  return (
    <div className= "warning">Warning!</div>
  );
}
function App(){
  const messages = ['React','Re: React', 'Re:Re React'];
  return (
    <div>
      <Clock />
      <Toggle />
      <LoginControl/>
      <Mailbox unreadMessages = {messages} />
      <Page />
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('App'));

// registerServiceWorker();
