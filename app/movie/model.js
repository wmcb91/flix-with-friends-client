import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  director: DS.attr('string'),
  yearReleased: DS.attr('number'),
  genre: DS.attr('string'),
  rating: DS.attr('string'),
  screenings: DS.hasMany('screening'),
  users: DS.hasMany('user'),
});
