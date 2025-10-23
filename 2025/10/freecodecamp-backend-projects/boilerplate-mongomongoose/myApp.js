require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const personSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  age: {
    type: Number,
  },
  favoriteFoods: {
    type: [String],
  },
});

let Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  const person = new Person({
    name: "Veni",
    age: "22",
    favoriteFoods: ["Pizza", "Sushi"],
  });
  if (err) return done(err);

  person.save((err, data) => {
    done(null, data);
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return done(err);

    done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, data) => {
    if (err) return done(err);

    done(null, data);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, data) => {
    if (err) return done(err);

    done(null, data);
  });
};

const findPersonById = (personId, done) => {
  Person.findById({ _id: personId }, (err, data) => {
    if (err) return done(err);

    done(null, data);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById({ _id: personId }, (err, data) => {
    if (err) return done(err);

    data.favoriteFoods.push(foodToAdd);
    data.save((err, updatedData) => {
      if (err) return done(err);

      done(null, updatedData);
    });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate(
    { name: personName },
    { age: ageToSet },
    (err, updatedData) => {
      if (err) return done(err);
      done(null, updatedData);
    },
    { new: true }
  );
};

const removeById = (personId, done) => {
  Person.findOneAndDelete({ _id: personId }, (err, deletedData) => {
    if (err) return done(err);

    done(null, deletedData);
  });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  Person.remove({ name: nameToRemove }, (err, removedData) => {
    if (err) return done(err);

    done(null, removedData);
  });
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  Person.find({ favoriteFoods: foodToSearch })
    .sort({ name: 1 })
    .limit(2)
    .select({ age: 0 })
    .exec((err, data) => {
      if (err) return done(err);

      done(null, data);
    });
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
