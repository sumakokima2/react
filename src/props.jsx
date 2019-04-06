import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return <p> Hello React!! 
      id : {this.props.id} , 
      text : {this.props.text}</p>;
  }
}

render(<App id={"1"} text={"test"}/>, document.getElementById('app'));