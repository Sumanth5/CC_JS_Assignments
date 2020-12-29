const team = {
  _players: [
    {
      firstName: 'KL',
      lastName: 'Rahul',
      age: 27
    },
    {
      firstName: 'Virat',
      lastName: 'Kohli',
      age: 30
    },
    {firstName: 'Manish',
      lastName: 'Pandey',
      age: 29
    }

  ],
  _games: [
    {
      opponent: 'Pakistan',
      teamPoints: 289,
      opponentPoints: 269
    },
    {
      opponent: 'Australia',
      teamPoints: 302,
      opponentPoints: 251
    },
    {
      opponent: 'Bangladesh',
      teamPoints: 358,
      opponentPoints: 120
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
  addGame(opponame, teamScore, oppoScore) {
    let game = {
      opponent: opponame,
      teamPoints: teamScore,
      opponentPoints: oppoScore,
      result:if(this.teamPoints > this.opponentPoints){
      console.log('you won');
              }
             else{
              console.log('opponent won')
                  } 
            };
    this._games.push(game);
  }
};
  


team.addPlayer('Mayank', 'Agarwal', 28);
team.addPlayer('Ajinkya', 'Rahane', 32);
team.addPlayer('Suresh', 'Raina', 31);
team.addGame('Sri Lanka', 321, 320);
team.addGame('New Zealand', 285, 320);
team.addGame('West Indies', 245, 244);

console.log(team.players);
console.log(team.games);
