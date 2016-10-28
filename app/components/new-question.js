import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuest: false,
  actions: {
    questFormShow() {
      this.set('addNewQuest', true);
    },

    saveQuest() {
      var params = {
        name: this.get('name'),
        quest: this.get('quest'),
        type: this.get('type'),
        date: this.get('date'),
      };
      this.set('addNewQuest', false);
      this.sendAction('saveQuest', params);
    }
  }
});
