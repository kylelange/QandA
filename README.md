# Q-and-a

#### _This app will allow a user to post questions and give answers to questions from other users.  Users will be able to delete, edit, and add new questions.  The app will also use a one-to-many relationship to show all answers linked to individual questions.  Oct 28th, 2016_

#### By _**Kyle Lange**_

![screenshot](Screen Shot.png)

## Description

_This project will:_

* _Use routes to control navigation through my application._
* _Use Handlebars to create dynamic elements in templates._
* _Persist data with models, Ember Data and Firebase._
* _Manipulate data between models and templates using components._

## _Week Four Requirements (pages where these are used are added INSIDE each requirement):_

* _Writing and calling custom helpers to quickly format data_
    * _unanswered-question.js: any question w/out an answer is given a string heading- UNANSWERED._
* _Combining or cross-referencing multiple pieces of data into single, easier-to-access properties with computed properties_
    * _answer-tile.js/hbs is given a computed property (computedAnswer) to combine a user's name and answer in a display._
* _Sorting and organizing data with computed properties_
    * _question-detail.js has a computed property to list user answers in alphabetical order by name._
* _Using Ember Services to allow a user to save questions_
    _question-service.js allows a user to save a question on a new route (savedquestions.js/hbs)._
* _Querying our Firebase data store_
  _unansweredonly.js/hbs filters the unanswered questions to the top of the page._

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

_Please run these commands in your terminal_

* `git clone <repository-url>` this repository
* `cd q-and-a`
* `npm install`
* `bower install`
* `ember install ember-bootstrap`
* `ember install emberfire` _(may also be required)_

## Running / Development

* `ember serve`
* Then visit this app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
* [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
* [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Known Bugs

  _{no known bugs at this time}_

  ## Support and contact details

  For questions, concerns, or suggestions please email baronsintrees@gmail.com


## Technologies Used

  * _HTML_
  * _CSS_
  * _EmberJS_
  * _Node.js with the Node Package Manager_
  * _Bower_
  * _Google Firebase via emberfire_
  * _Git_


### License

  _This software is licensed under the MIT license._

  Copyright (c) 2016 **_Kyle Lange_**
