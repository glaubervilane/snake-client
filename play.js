const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");
const conn = connect();
conn.on('connect', () => {
  // Send a message to every client when a new user joins
  conn.write("Say: Welcome to the snake game!");
});
setupInput(conn);