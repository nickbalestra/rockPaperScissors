import React from 'react';


export default class extends React.Component {
  constructor() {
    super()
  }

  render() {
    var games = this.props.games.map((game, i)=>{
      var gameResult;
      if (game.result === 0) {
        gameResult = 'Lost';
      } else if (game.result === 2) {
        gameResult = 'Won';
      } else {
        gameResult = 'Tie';
      }
      return (
        <tr key={i}>
          <td>{game.player}</td>
          <td>{game.computer}</td>
          <td>{gameResult}</td>
        </tr>
      )
    }).reverse();

    return (
      <table className="table table-striped history">
        <thead>
          <tr>
            <th className="score">Your Input</th>
            <th className="date">Computer Input</th>
             <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {games}
        </tbody>
      </table>
    )
  }
}
