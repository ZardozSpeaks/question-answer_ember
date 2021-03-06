import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  time: DS.attr(),
  content: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
