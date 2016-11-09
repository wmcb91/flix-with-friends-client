import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('movie');
  },

  actions: {
    // createScreening () {
    //   console.log('in movies route');
    // }
    createScreening (newScreening) {
      console.log('newScreening is in movies route');
      console.log('this.get store is', this.get('store'));
      let screening = this.get('store').createRecord('screening', newScreening);
      return screening.save();
    },
  }

});
