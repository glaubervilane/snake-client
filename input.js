let connection;

const setupInput = function(conn) {
  connection = conn;

  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    }

    if (key === 'w') {
      connection.write("Move: up");
    } else if (key === 'a') {
      connection.write("Move: left");
    } else if (key === 's') {
      connection.write("Move: down");
    } else if (key === 'd') {
      connection.write("Move: right");
    } else if (key === 'f') {
      connection.write("Say: Hello, everyone!");
    } else if (key === 'g') {
      connection.write("Say: Goodbye, everyone!");
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
