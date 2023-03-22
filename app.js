// const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: " Pretty solid as a fruit.",
});

//fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 37,
});

// person.save();

const kiwi = new Fruit({
  name: "kiwi",
  score: 10,
  review: "The best fruit!",
});
const banana = new Fruit({
  name: "banana",
  score: 9,
  review: "NIce fruit!",
});
const orange = new Fruit({
  name: "orange",
  score: 10,
  review: "Top fruit!",
});

Fruit.insertMany([kiwi, banana, orange]);

//   function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succes!");
//   }
// });

console.log("Serwer smiga");
