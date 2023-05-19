const { keyMappings } = require("./constants");
let connection;
let currentDirection;

const setupInput = function(conn) {
  connection = conn;
  currentDirection = "right"; // Initial direction

  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    } else if (keyMappings[key]) {
      const command = keyMappings[key];
      if (command.startsWith("Move:")) {
        const direction = command.split(":")[1].trim();
        currentDirection = direction;
      }
      connection.write(command);
    }
  };

  const sendContinuousMovement = function() {
    if (connection.destroyed) {
      clearInterval(movementInterval);
      return;
    }
    const movementCommand = `Move: ${currentDirection}`;
    connection.write(movementCommand);
  };
  
  const movementInterval = setInterval(sendContinuousMovement, 100);
  

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);

  // Send movement commands every 100ms
  // setInterval(sendContinuousMovement, 100);

  return stdin;
};

module.exports = { setupInput };
