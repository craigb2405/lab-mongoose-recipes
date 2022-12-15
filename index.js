const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    Recipe.create({
    "title": "Pork Pie",
    "level": "Amateur Chef",
    "ingredients": [
      "800g boneless pork shoulder",
      "400g skinless pork belly",
      "100g streaky bacon",
      "1 tbsp chopped fresh sage",
      "1 tbsp English mustard powder",
      "1 tsp ground mace",
      "1 tsp mixed spice",
      "half tsp ground pepper, preferably white",
      "half tsp fine salt",
      "1 tsp anchovy sauce, or 4 anchovy fillets in oil, drained and finely chopped (optional)"
    ],
    "cuisine": "british",
    "dishType": "main_course",
    "image": "https://i.guim.co.uk/img/media/9e8d417fceb9c3e66b7b78dfe602be24e48b22cc/309_948_3070_2519/master/3070.jpg?width=620&quality=85&dpr=1&s=none",
    "duration": 160,
    "creator": "Chef Cam"})
    .then(Recipe => console.log(Recipe.title))
  })
    .catch(error => {
    console.error('Error connecting to the database', error);
  });

  Recipe.insertMany(data)


