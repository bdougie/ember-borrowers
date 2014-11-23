import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      console.log('+--- svae action bubbled up to friends route');

      return true;
    },
    cancel: function() {
      console.log('+--- cancel action bubbled to friends route');

      return true;
    }
  }
});
