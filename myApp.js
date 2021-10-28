require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;
const personSchema = new Schema({
  name: {type: String, required: true},
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model('Person',personSchema);
/**Save a person data into database */
const createAndSavePerson = (done) => {
  let AbdouYahouza = new Person({name: 'Abdou Yahouza', age: 25, favoriteFoods: ["Pizza", "Burger", "Beans"]});

  AbdouYahouza.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};
/**Save Many people data in the Database */
let arrayOfPeople = [
  {name: 'Sani', age: 29, favoriteFoods: ["Pizza", "Burger", "Beans", "Salad"]}, 
  {name: 'Mounkaila', age: 26, favoriteFoods: ["Pizza", "Burger", "Bread", 'Moringa']},
  {name: 'Xiao Jia', age: 25, favoriteFoods: ["Noodle", "Ramen", "Beans", "Banana"]},
  {name: 'Xiao Liu', age: 25, favoriteFoods: ["Ramen", 'Noodle', 'Apple', 'Jicken']},
  {name: 'Maoyu', age: 27, favoriteFoods: ["Noodle", 'Sardines', "Vegetables"]}
];
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, people) {
    if (err) return console.error(err);
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function(err, people) {
    if(err) return console.error(err);
    done(null, people);
  });
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
