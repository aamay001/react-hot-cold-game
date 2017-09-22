import React, {Component} from 'react';

export default class Controller extends Component {

  constructor(props){
    super(props);
    this.state = {
      userInput: 0
    };
  }

  setInputValue(userInput){
    this.setState({userInput});
  }

  render(){
    return (
      <div className="hc-controller">
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor="hc-guess-input">Guess a Number between 1 and 100</label>
          <input id="hc-guess-input" type="number" min="1" max="100" required
            onChange={e => this.setInputValue(parseInt(e.target.value, 10))}/>
          <button type="submit"
            onClick={e => {
              if(this.state.userInput > 0 && this.state.userInput <= 100)
                this.props.onInput(this.state.userInput)
            }}>Submit</button>
        </form>
      </div>
    );
  }
}