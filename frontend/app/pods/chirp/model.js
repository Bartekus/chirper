import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  text: attr('string'),
  user: belongsTo('user'),
  createdAt: attr('date')
});
