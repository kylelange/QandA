import Ember from 'ember';

export default Ember.Service.extend({
  savedQs: [],

  add(savedQ) {
    this.get('savedQs').pushObject(savedQ);
    console.log(this.get('savedQs'), "this");
  }
});
