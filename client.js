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
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: GFM");
    // sendMoves();
  })

  // function sendMoves() {
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 50);
  //   setTimeout(() => {
  //     conn.write("Move: down");
  //   }, 100);
  //   setTimeout(() => {
  //     conn.write("Move: right");
  //   }, 150);
  //   setTimeout(() => {
  //     conn.write("Move: left");
  //   }, 200);
  // }
  return conn;
};

module.exports = { connect };