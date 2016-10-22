# Github API

#### _10-11-16_

#### By _*Ayana Powell**_

## Description
_A simple webpage that allows users to input a username and get returned a list of public repos from that user as well as general user information, if available_

## Specs
*_User inputs a github user's username_
  *input example: ayanapowell
  *output example: ayana powell, ayanapowell1@gmail.com, "this user has no repos yet"
  
## Setup/Installation Requirements

* Clone the repository at (https://github.com/ayanapowell/githubApi)
* Using the command line, navigate to the project's root directory
* Take '.env' out of the .gitignore file
* You will need to get your own github API access token from (https://github.com/blog/1509-personal-api-tokens)
*  Create a .env folder in the TOP LEVEL of the project, and place your API access token in following code below:
  *_exports.apiKey = "YOUR_APIKEY_HERE";_
* At the top of the js/github.js file place the following code:
  *_var apiKey = require('./../.env').apiKey;_
* Install node dependencies by running
  * $ npm install
* Install bower dependencies by running 
  * $ bower install
* Build the files by running $ gulp build
* Open index.html to view application in browser
* On command line enter 'gulp serve' to run application on a server

## Known Bugs

_No known bugs at this time_

## Technologies Used

_HTML,
CSS,
JavaScript,
Node,
Bootstrap
jQuery_

### License

*This webpage is licensed under the MIT license.*

Copyright (c) 2016 **_Ayana Powell**
