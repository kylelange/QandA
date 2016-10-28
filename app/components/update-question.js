import Ember from 'ember';

export default Ember.Component.extend({
  updateTileForm: false,

  actions: {
    updateTileForm() {
      this.set('updateTileForm', true);
    },
    update(question) {
      var params = {
        name: this.get('name'),
        quest: this.get('quest'),
        type: this.get('type'),
        date: this.get('date'),
      };
      this.set('updateTileForm', false);
      this.sendAction('update', question, params);
    }
  }
});
