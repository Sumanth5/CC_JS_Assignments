
const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []},
  get appetizers(){

  },
  get mains(){

  },
  get desserts(){

  },
  set appetizers(appetizersIn){

  },
  set mains(mainsIn){

  },
  set desserts(dessertsIn){

  },
  get _courses (){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.dessserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
      };
      return this._courses[courseName].push(dish);
      },
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random()* dishes.length);
    return randomIndex;
  },
  generateRandomMeal: function() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + mains.price + desserts.price;

    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, The price is $${totalPrice}.`;
  }
};

  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('appetizers', 't Salad', 4);
  menu.addDishToCourse('appetizers', 'z Salad', 6.75);

  enu.addDishToCourse('mains', 'Caesar Salad', 4.25);
  menu.addDishToCourse('mains', 't Salad', 4);
  menu.addDishToCourse('mains', 'z Salad', 6.75);

  enu.addDishToCourse('desserts', 'Caesar Salad', 4.25);
  menu.addDishToCourse('desserts', 't Salad', 4);
  menu.addDishToCourse('desserts', 'z Salad', 6.75);

let meal = menu.generateRandomMeal();
console.log(meal);

