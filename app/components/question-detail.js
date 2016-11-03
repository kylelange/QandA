import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['author:asc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),

  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuest', question);
      }
    },
    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    }
  }
});
