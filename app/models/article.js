import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  createAt: DS.attr('date'),
  state: DS.attr('string'),
  notes: DS.attr('string')
});
