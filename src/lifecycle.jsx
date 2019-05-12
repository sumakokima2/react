import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  constructor(props) { //1. constructor
    super(props);
    this.state = {
        name: "second_name",
        getDerivedStateFromProps: false,
        componentDidUpdate: false,
        isDerivered: false,
        getDerivedStateFromProps: false,
        getDerivedStateFromProps_hikisuu1:"hikisuu1",
        getDerivedStateFromProps_hikisuu2:"hikisuu2",
        componentDidUpdate_hikisuu1:"hikisuu1",
        componentDidUpdate_hikisuu2:"hikisuu2",
        getDerivedStateFromProps_hikisuu1:"hikisuu1",
        getDerivedStateFromProps_hikisuu2:"hikisuu2"
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const name = "getDerivedStateFromProps";
    const hikisuu1 = nextProps.name;
    const hikisuu2 = prevState.name;

    if (prevState.name === name) {
      return;
    }
    return { getDerivedStateFromProps: true,
         name: name, 
         getDerivedStateFromProps_hikisuu1: hikisuu1,
         getDerivedStateFromProps_hikisuu2: hikisuu2};
  }
  

  componentDidUpdate(prevProps) {
    const hikisuu1 = prevProps.name;  
    this.setState({componentDidUpdate: true, 
        name: "react2",
        componentDidUpdate_hikisuu1: hikisuu1})
        
    if (prevProps.name !== "this.state.name") {
      this.setState({componentDidUpdate: true, 
        name: "react2",
        componentDidUpdate_hikisuu1: hikisuu1})
    }
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    // always re-render
    return true;
  }

  render () {
    return (
        <div>
            {this.state.getDerivedStateFromProps && (
          <p>
            このテキストは getDerivedStateFromProps 実行後に表示されます
          </p>
            )}
            第一引数：{this.state.getDerivedStateFromProps_hikisuu1} 
            <br/>
            第二引数：{this.state.getDerivedStateFromProps_hikisuu2} 
        <hr/>
            {this.state.componentDidUpdate && (
          <p>
            このテキストは componentDidUpdate 実行後に表示されます
          </p>
            )}
            {this.state.componentDidUpdate_hikisuu1}
        <hr/>
        </div>    
    )
  }
}

render(<App name={"first_name"} hikisuu1={"hikisuu1"} hikisuu2={"hikisuu2"}/>, document.getElementById('app'));