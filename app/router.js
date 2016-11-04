import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('savedquestions');
  this.route('contact');
  this.route('question-segment', {path: '/question/:question_id'});
});

export default Router;
