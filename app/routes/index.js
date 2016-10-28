import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    saveQuest(params) {
      var newQuest = this.store.createRecord('question', params);
      newQuest.save();
      this.transitionTo('index');
    },

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
      this.transitionTo('index');
    }
  }
});
