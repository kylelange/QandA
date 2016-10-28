import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    saveQuest(params) {
      var newQuest = this.store.createRecord('question', params);
      newQuest.save();
      this.transitionTo('index');
    }
  }
});
