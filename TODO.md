# To-Do

[X] SERVER SETUP FILE STRUCTURE
    [X] Make .gitignore file in root folder
    [X] Make readme.md file in root folder (optional, but recommended)
        [X] Make server folder in root folder
            [X] Make server.js file in server folder
            [X] Make modules folder
            [X] Make public folder
                [ ] Add favicon.ico file in public folder
                [X] Make index.html in public folder
                    [X] Link "./styles/style.css"
                    [X] Source in "./vendors/jquery-3.6.0.js" above
                    [X] Source in "./scripts/client.js" 
                [X] Make scripts folder
                    [X] Make client.js file here
                        [X] Make sure to source in jQuery
                [X] Make styles folder
                    [X] Make style.css file here
                    [X] Source in bootstrap if you like
                [X] Make vendors folder
                    [X] Add jQuery.js file here

[X] NPM CHEAT SHEET:
        [X] npm init --yes Makes a package.json — only need if doesnt exist already
        [X] npm install 'library' installs library to project. Needs package.json
        [X] npm install installs ALL EXISTING libraries in package.json
        [X] add script "start": "node server/server.js" to package.json
        [X] npm start if setup, will start server


**Create a user interface where the user can input two values (2 input elements) and the select type of mathematical operation**
    [X] Create index.html structure
        [X] Create header
        [X] Two input fields created
            [X] first number
            [X] second number
        [X] Mathematical buttons created
            [X] addition
            [X] subtraction
            [X] multiplication
            [X] division
        [X] The calculations have to append somewhere - a table? a list? 


**When the submit (`=` button) is clicked, capture this input, bundle it up in an object, and send this object to the server via a POST. There should also be a 'C' button that will clear the user input fields**
    