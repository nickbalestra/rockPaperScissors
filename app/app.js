import React from 'react';
import ReactDOM from 'react-dom';

import Scores from './Scores.js';
import Pad from './Pad.js';
import History from './History.js';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import style from './game.css';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      computer: this.randomPick(),
      games: [],
    };

    this.randomPick = this.randomPick.bind(this);
    this.play = this.play.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', (e) => {
      if (e.keyCode === 82) {
        this.play('Rock');
      } else if (e.keyCode === 80) {
        this.play('Paper');
      } else if (e.keyCode === 83) {
        this.play('Scissors');
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', (e) => {
      if (e.keyCode === 82) {
        this.play('Rock');
      } else if (e.keyCode === 80) {
        this.play('Paper');
      } else if (e.keyCode === 83) {
        this.play('Scissors');
      }
    });
  }

  randomPick() {
    var options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];
  }

  play(option) {
    console.log(option);
    var game = {};

    if (this.state.computer === option) {
      game.result = 1;
    } else if ( (this.state.computer === "Rock" && option === "Paper") || 
                (this.state.computer === "Paper" && option === "Scissors") ||
                (this.state.computer === "Scissors" && option === "Rock") ) {
      game.result = 2;
    } else {
      game.result = 0;
    }

    game.computer = this.state.computer;
    game.player = option;

    var games = this.state.games;
    games.push(game);
    
    var random = this.randomPick();

    this.setState({games, computer: random});
  }

  render() {
    return (
      <div>
        <Scores scores={this.state.games} />
        <Pad play={this.play} />
        <History games={this.state.games} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
