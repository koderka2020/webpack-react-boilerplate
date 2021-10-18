const express = require('express'); // import NodeJS express module
const app = express(); // save express property methods to variable app
const port = 3000; // set port to 3000
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  // https://expressjs.com/en/starter/static-files.html

  // serve index.html on the route '/'

  //NOTE: YOU MUST USE APP.USE() WHEN SERVING STATIC FILES, APP.GET() WILL NOT WORK IN THIS CASE AND THE REQUEST WILL NOT BE HANDLED.
  app.use('/build', express.static(path.join(__dirname, '../build')));

  app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

app.listen(port, () => {
  console.log('Listening on port 3000');
});
