const handleUserInput = function (data, conn) {
  if (data === '\u0003') {
    process.exit(); // Terminate the game if Ctrl + C is pressed
  } else {
    // Handle other key inputs here
    // For example, send "Move: up" command for the 'w' key
    if (data === 'w') {
      conn.write("Move: up");
    }
    // Add more key handlers for other movements here
  }
};

const setupInput = function (conn) {
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