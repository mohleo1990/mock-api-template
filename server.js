// Require the json-server module and assign it to a variable
const jsonServer = require('json-server');
const server = jsonServer.create();

// Point to the file that acts as the database for the JSON server
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));

// Default middlewares provided by json-server
const middlewares = jsonServer.defaults();

// Server port
const PORT = process.env.PORT || 3000;

// Use default middlewares
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
server.use(jsonServer.bodyParser);

// Use the router
server.use(router);

// Server setup to listen on the specified port
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
