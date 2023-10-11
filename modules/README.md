# Creating Custom Modules for TF2 I.B.

## Introduction

TF2 I.B is a versatile bot designed for Team Fortress 2 (TF2) players. You can extend its functionality by creating custom modules. This guide will walk you through the process of creating and adding custom modules to the bot.

## Getting Started

1. **Access the Example File:**
   - In the repository, navigate to the `modules` folder.
   - You'll find an example file called `example.js`. This serves as a template for creating custom modules.

2. **Create a New Module File:**
   - To create a new custom module, simply duplicate the `example.js` file and rename it to your desired module name (e.g., `mymodule.js`).

3. **Edit the Module File:**
   - Open your newly created module file using a text editor.
   - You'll see the basic structure like this:

   ```javascript
   const functions = require('../functions/functions');
   const defIndexJSON = require('../items/defIndex.json');

   module.exports = (client, tf2) => {
       // Your custom module logic goes here.
   };
   ```

## Writing Custom Modules

1. **Custom Logic:**
   - Within the `module.exports` function, you can define your custom module logic.
   - Example: Use `tf2.on('itemAcquired', function(){ console.log("hello world!") })` to send a console message every time the bot acquires an item.

2. **Parameters:**
   - The function takes four parameters:
     - `client`: The bot client for interacting with Steam.
     - `tf2`: The TF2 module for accessing TF2-related functionality.

3. **Save Changes:**
   - Save your changes in the module file.

## Adding More Custom Modules

1. **Duplicate and Customize:**
   - To add more custom modules, duplicate the `example.js` file or any existing module file.
   - Rename the duplicated file to your desired module name.
   - Edit the file to define the custom logic for your new module.

2. **Restart the Bot:**
   - After adding or modifying custom module files, restart the bot for the changes to take effect.

## Conclusion

You now know how to create and add custom modules to TF2 Steam Bot. Feel free to create additional modules to enhance the functionality of your bot. If you have any questions or need assistance, please refer to the issues page.

Happy bot building!

---
