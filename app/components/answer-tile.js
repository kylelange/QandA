import Ember from 'ember';

export default Ember.Component.extend({
  computedAnswer: Ember.computed('answer.author', 'answer.ans', function() {
    return this.get('answer.author') + ' says: ' + this.get('answer.ans');
  }),

  actions: {
    delete(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
