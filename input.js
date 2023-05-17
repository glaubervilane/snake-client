const { keyMappings } = require("./constants");
let connection;

const setupInput = function(conn) {
  connection = conn;

  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    } else if (keyMappings[key]) {
      connection.write(keyMappings[key]);
    }
  }

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = { setupInput };
