import Ember from 'ember';

export function unansweredQuestion(params) {
  var question = params[0];

  if(question.get('answers').get('length') < 1) {
    return '**UNANSWERED!**';
  } else {
    return '';
  }
}

export default Ember.Helper.helper(unansweredQuestion);
