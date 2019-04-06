import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {

	// 　　　　　値を指定するタイミング	値の変更可否
    // props	コンポーネント作成時	NO
    // state	コンポーネント作成後	YES    

    constructor(props) {
        super(props);
        this.state = {id: 2, text: "state"};
    }
    
    componentDidMount() {
        // componentのアウトプットがされたときに実行される
        console.log("didmount: "+this.state.id);
    }

    static getDerivedStateFromProps(prevProps, prevState) {
            console.log(prevProps);
            console.log(prevState);
        if (prevProps.id !== prevState.id) {
            return {
                //this.setStateのように働く
                id: 3
            };
        }
        
    }

    //componentWillMount(), componentWillReceiveProps() は非推奨。getDerivedStateFromPropsが推奨

    render () {
    return <p> Hello React!! 
      propsId : {this.props.id} ,
      statesId : {this.state.id} , 
      propsText : {this.props.text},
      statesText : {this.state.text}</p>;
  }
}

render(<App  id={"1"} text={"props"}/>, document.getElementById('app'));