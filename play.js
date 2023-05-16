const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:  '172.22.25.40',// IP address here,
    port: 50541,// PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => { 
    console.log("connect");
  })
  conn.on("data", (data) => { 
    console.log(data);
  })
  return conn;
};

console.log("Connecting ...");
connect();