import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {

	// 　　　　　値を指定するタイミング	値の変更可否
    // props	コンポーネント作成時	NO
    // state	コンポーネント作成後	YES    

  constructor(props) {
    super(props);
    this.state = {id: 1, text: "test"};
  }

  render () {
    return <p> Hello React!! 
      id : {this.state.id} , 
      text : {this.state.text}</p>;
  }
}

render(<App />, document.getElementById('app'));