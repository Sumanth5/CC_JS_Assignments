
class School{
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents; 
  }
  get name (){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }
  set numberOfStudents(input){
    if(typeof input === 'Number'){
      return this._numberOfStudents;
    }
    else{
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    } 
  }
  quickFacts(){
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }
  static pickSubstituteTeacher(substituteTeachers){
    let randoTe = Math.floor(substituteTeachers.length*Math.random());
    return substituteTeachers[randoTe];
  }
}

class PrimarySchool extends School{
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
    }
  get pickupPolicy(){
    return this._pickupPolicy;
  }  
}
class HighSchool extends School{
  constructor(name, numberOfStudents, sportsTeam,averageTestScores){
    super(name, 'high', numberOfStudents);
    this._sportsTeam = sportsTeam;
    this._averageTestScores = averageTestScores;
  }
  get sportsTeam(){
    console.log(this._sportsTeam);
  }
  get averageTestScores(){ 
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const average = this._averageTestScores.reduce(reducer) / this._averageTestScores.length;
    console.log(`${this._name} average score is ${average}`)
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.'); 
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
const alSmith = new HighSchool('Al E. Smith',416,['Baseball', 'Basketball', 'Volleyball', 'Track and Field'], [100, 90, 90]);
alSmith.sportsTeam;
alSmith.averageTestScores;

