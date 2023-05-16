let connection;

const handleUserInput = function (data, conn) {
  if (data === '\u0003') {
    process.exit(); // Terminate the game if Ctrl + C is pressed
  } else {
    // Handle other key inputs here
    // For example, send "Move: up" command for the 'w' key
    if (data === 'w') {
      connection.write("Move: up");
    } else if (data === 'a') {
      connection.write("Move: left");
    } else if (data === 's') {
      connection.write("Move: down");
    } else if (data === 'd') {
      connection.write("Move: right");
    }
    // Add more key handlers for other movements here
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (data) => {
    handleUserInput(data, conn);
  });
  return stdin;
};

module.exports = { setupInput };
