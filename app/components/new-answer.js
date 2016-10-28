import Ember from 'ember';

export default Ember.Component.extend({
  addNewAns: false,
  actions: {
    answerFormShow() {
      this.set('addNewAns', true);
    },
    saveAnswer() {
      var params = {
        author: this.get('author'),
        ans: this.get('ans'),
        question: this.get('question')
      };
      this.set('addNewAns', false);
      //console.log(params);
      this.sendAction('saveAnswer', params);
    }
  }
});
