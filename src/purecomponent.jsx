import React from "react";
import {render} from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: ["hello"], 
    count:0};
  }

  componentDidMount() {
    setInterval(() => {
      const message = [...this.state.name];
      let count = this.state.count;
      count ++;
      message.push("add"+count);
      this.setState({ name:message,count:count });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState){
    if (nextState.count<5) {
      return true;
    }
    else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <Counter count={this.state.count} />
        <MessageList1 message={this.state.name} />
        <MessageList2 message={this.state.name} />
      </div>
    );
  }
}

class Counter extends React.PureComponent{
  render(){
    console.log("count"+this.props.count);
    return (this.props.count);
  }

}

class MessageList1 extends React.Component {
  render() {
    return (
      <div style={{ float: "left"}}>
      <ul>
        {this.props.message.map((m, i) => <Message1 key={i} message={m} />)}
      </ul>
      </div>
    );
  }
}

class Message1 extends React.Component {
  render() {
    console.log("React.Component");
    return <li>{this.props.message}</li>;
  }
}

class MessageList2 extends React.Component {
  render() {
    return (
      <div style={{ float: "left"}}>
      <ul>
        {this.props.message.map((m, i) => <Message2 key={i} message={m} />)}
      </ul>
      </div>
    );
  }
}

class Message2 extends React.PureComponent {
  render() {
    console.log("React.PureComponent");
    return <li>{this.props.message}</li>;
  }
}

render(<App name={"first_name"}/>, document.getElementById('app'));