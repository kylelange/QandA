import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  quest: DS.attr(),
  type: DS.attr(),
  date: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
