# Snake Game

This is a simple Snake game implementation written in JavaScript. It allows players to control a snake on a game board and navigate it to eat food and grow longer. The goal is to achieve the highest possible score without colliding with the walls or the snake's own body.

## Getting Started

To run the Snake game on your local machine, follow these steps:

1. Clone the repository:

   ```shell
   git clone <repository-url>

2. Install the required dependencies:

   ```shell
   npm install

3. Start the game:

   ```shell
   node play.js

4. Use the following keys to control the snake:

  W: Move Up
  A: Move Left
  S: Move Down
  D: Move Right
  F: Say Hello to Everyone
  G: Say Goodbye to Everyone

## Code Structure
The Snake game consists of the following files:

- play.js: This is the entry point of the game. It establishes a connection with the game server, sends a welcome message to every client, and sets up the user input for controlling the snake.
- input.js: This file contains the logic for handling user input. It listens for keyboard events and sends the corresponding commands to the game server based on the key pressed. It also manages continuous movement of the snake.
- client.js: This file handles the network communication with the game server. It establishes a TCP connection, interprets incoming data as text, and sends a name message to the server upon successful connection.
- constants.js: This file defines the IP address, port number, and key mappings used in the game. It provides the configuration settings necessary for the game to function correctly.

## Customize
To customize the game, you can modify the IP address, port number, and key mappings in the constants.js file. You can also adjust the game logic in the input.js file to change the behavior of the snake or add new features.

## License
This Snake game is licensed under the MIT License.
Feel free to use this README.md file as a starting point and customize it further to provide more detailed information or instructions specific to your Snake game implementation.
