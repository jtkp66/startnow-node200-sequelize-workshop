const server = require('./app');
const port = process.env.PORT || 8080;

server.listen(8080, function() {
  console.log('Server is listening on http://localhost:8080')
});