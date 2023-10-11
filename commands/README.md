# Creating Custom Commands for TF2 I.B.

## Introduction

TF2 I.B is a versatile bot designed for Team Fortress 2 (TF2) players. You can extend its functionality by creating custom commands. This guide will walk you through the process of creating and adding custom commands to the bot.

## Getting Started

1. **Access the Example File:**
   - In the repository, navigate to the `commands` folder.
   - You'll find an example file called `example.js`. This serves as a template for creating custom commands.

2. **Create a New Command File:**
   - To create a new custom command, simply duplicate the `example.js` file and rename it to your desired command name (e.g., `mycommand.js`).

3. **Edit the Command File:**
   - Open your newly created command file using a text editor.
   - You'll see the basic structure like this:

   ```javascript
   const functions = require('../functions/functions');
   const defIndexJSON = require('../items/defIndex.json');

   module.exports = (client, tf2, steamID, message) => {
       // Your custom command logic goes here.
   };
   ```

## Writing Custom Commands

1. **Custom Logic:**
   - Within the `module.exports` function, you can define your custom command logic.
   - Example: Use `client.chatMessage(steamID, "Hello World!");` to send a message to `steamID` (the user who executed the command).

2. **Parameters:**
   - The function takes four parameters:
     - `client`: The bot client for interacting with Steam.
     - `tf2`: The TF2 module for accessing TF2-related functionality.
     - `steamID`: The Steam ID of the user who sent the command.
     - `message`: The message content sent by the user (string).

3. **Save Changes:**
   - Save your changes in the command file.

## Running Custom Commands

1. **No Prefix Required:**
   - TF2 Steam Bot doesn't require a prefix for commands. For example, the command "help" can be executed simply as "help" in a chat message.

2. **Command Execution:**
   - Your command file name (excluding the `.js` extension) is the command name.
   - For example, if you have a file named `mycommand.js`, the command can be executed by sending "mycommand" as a chat message to the bot.

## Adding More Custom Commands

1. **Duplicate and Customize:**
   - To add more custom commands, duplicate the `example.js` file or any existing command file.
   - Rename the duplicated file to your desired command name.
   - Edit the file to define the custom logic for your new command.

2. **Restart the Bot:**
   - After adding or modifying custom command files, restart the bot for the changes to take effect.

## Conclusion

You now know how to create and add custom commands to TF2 Steam Bot. Feel free to create additional commands to enhance the functionality of your bot. If you have any questions or need assistance, please refer to the issues page.

Happy bot building!

---
