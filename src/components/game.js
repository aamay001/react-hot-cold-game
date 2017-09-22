import React, {Component} from 'react';
import fakes from 'faker';
import Controller from './controller';
import PlayerStatus from './playerStatus';

const GUESS_LEVEL = {
  UNKNOWN: 0,
  ON_FIRE: 2,
  HOTER: 5,
  HOT: 10,
  WARMER: 15,
  WARM: 20,
  CHILLY: 25,
  COLD: 30,
  COLDER: 35,
  ICY: 40,
  ICE_COLD: 45
}

const GUESS_COLOR = {
  2: "#E55700",
  5: "#CB5815",
  10: "#B2592A",
  15: "#985A3F",
  20: "#7F5B54",
  25: "#655C6A",
  30: "#4C5D7F",
  35: "#325E94",
  40: "#195FA9",
  45: "#0061BF"
}

export default class Game extends Component {

  constructor(props){
    super(props);
    this.state = {
      guesses: [],
      gameWon: false,
      guessLevel: GUESS_LEVEL.UNKNOWN,
      feedBack: 'Enter your first guess!'
    }
  }

  handleGuess(guess){

    if(this.state.gameWon){
      return;
    }

    let target = this.props.targetNumber;
    this.setState({
      guesses : [...this.state.guesses, guess]
    });
    if ( guess === target ){
      this.setState({
        gameWon: true
      });
      document.getElementsByTagName('canvas')[0].style.display = 'block';
      document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
      return;
    }
    else {
      let guessState;
      let guessFeedback;
      Object.keys(GUESS_LEVEL).forEach(function(key) {
        if (Math.abs(guess-target) <= GUESS_LEVEL[key] &&
            !guessState && GUESS_LEVEL[key] !== 0 ){
          guessState = GUESS_LEVEL[key];
          guessFeedback = key;
        }
      });

      if(!guessState){
        guessState = GUESS_LEVEL.ICE_COLD;
        guessFeedback = 'ICE_COLD';
      }

      guessFeedback = `You're ${guessFeedback.replace('_', ' ').toLowerCase()}!`;

      this.setState({
        guessLevel: guessState,
        feedBack: guessFeedback
      });
      document.getElementsByTagName('body')[0].style.backgroundColor = GUESS_COLOR[guessState];
    }
  }

  render(){
    return (
      <div className="hc-game-area">
        <h2 hidden={!this.state.gameWon}>You Solved It!</h2>
        <Controller onInput={guess => this.handleGuess(guess)} />
        <PlayerStatus guessList={this.state.guesses} gameFeedback={this.state.feedBack}/>
        <button hidden={!this.state.gameWon} onClick={() => document.location.reload()}>Play Again</button>
      </div>
    );
  }

}

Game.defaultProps = {
  targetNumber: Math.floor(fakes.random.number(1000) * .100)
}