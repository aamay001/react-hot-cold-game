import React, {Component} from 'react';

export default class PlayerStatus extends Component{
  render(){
    const list = this.props.guessList.map( (guess, index) =>
      <li key={index}>{guess}</li>
    );
    return (
      <div>
        <h3>{this.props.gameFeedback}</h3>
        <ul className="hc-player-attempts">
          {list}
        </ul>
      </div>
    );
  }
}

PlayerStatus.defaultProps = {
  guessList: [],
  gameFeedback: ''
}
