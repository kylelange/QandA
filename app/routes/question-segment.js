import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    destroyQuest(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },

    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('question-segment');
    },

    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      // console.log(params);
      // console.log(question);
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionTo('question-segment', question);
    },
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('question-segment');
    }
  }
});
