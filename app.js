const express = require('express');
const path = require('path');
const routes = require('./routes');
const { get404 } = require('./controllers/error');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: 'true' }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
app.use('/', get404)

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
