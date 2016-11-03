import Ember from 'ember';

export default Ember.Route.extend({
  questionService: Ember.inject.service(),

  actions: {
    test() {
      console.log(this.get('questionService.savedQs'), "that");
    }
  }
});
