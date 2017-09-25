import React, {Component} from 'react';

export default class Controller extends Component {

  state = {
    userInput: ''
  };

  setInputValue(userInput){
    this.setState({userInput});
  }

  _onSubmit = (e) => {
    e.preventDefault();
    const userInput = parseInt(this.state.userInput, 0);
    if(userInput > 0 && userInput <= 100) {
      this.props.onInput(userInput)
    }
    this.setState({userInput:''});
  }

  _onInputChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

  render() {
    return (
      <div className="hc-controller" >
        <form onSubmit={this._onSubmit}>
          <label htmlFor="hc-guess-input">Guess a Number between 1 and 100</label>
          <input id="hc-guess-input" name="userInput" type="number" min="1" max="100" required
            onChange={this._onInputChange} value={this.state.userInput}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}