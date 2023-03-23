// const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

// require("events").EventEmitter.prototype._maxListeners = 70;
// require("events").defaultMaxListeners = 70;

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 10,
  review: " Peaches are so yummy!",
});

// fruit.save();

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

// const kiwi = new Fruit({
//   name: "kiwi",
//   score: 10,
//   review: "The best fruit!",
// });
// const banana = new Fruit({
//   name: "banana",
//   score: 9,
//   review: "Nice fruit!",
// });
// const orange = new Fruit({
//   name: "orange",
//   score: 10,
//   review: "Top fruit!",
// });

// // Fruit.insertMany([kiwi, banana, orange]);

// //   function (err) {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log("Succes!");
// //   }
// // });

Fruit.find()
  .then(function (fruits) {
    // console.log(fruits);
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
      mongoose.connection.close();
    });
  })
  .catch(function (err) {
    console.log(err);
  });

// Fruit.find(function (fruits) {
//   console.log(fruits);
// });

Fruit.updateOne({ _id: "641bf62bb875d5d6a2c4e8a7" }, { name: "Peach" });

// Fruit.deleteOne({ _id: "641bef7aa058db48f6816be4" });

console.log("Serwer smiga");
