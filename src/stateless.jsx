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

//functionを使う
function Counter(props){
//関数名がコンポート名
//関数名の頭を大文字に
//returnにDOMを書く
    console.log("count"+props.count);
    return (props.count);

}

//React.createClass()は古い？create-react-classを使う
var createReactClass = require('create-react-class');
var MessageList1 = createReactClass({
    getDefaultProps: function() {
        return {
          name: '更新回数'
        };
      },
    render: function() {
      return <div style={{ float: "left"}}>{this.props.name}
      <ul>
        {this.props.message.map((m, i) => <Message1 key={i} message={m} />)}
      </ul>
      </div>;
    }
  });


class Message1 extends React.Component {
  render() {
    console.log("React.Component");
    return <li>{this.props.message}</li>;
  }
}

class MessageList2 extends React.Component {
  render() {
    return (
      <div style={{ float: "left"}}>:(←getDefaultPropsで”更新回数”を入れたら段落がずれたため) 
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