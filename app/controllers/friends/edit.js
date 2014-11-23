import FriendsBaseController from 'ember';

export default FriendsBaseController.extend({
  actions: {
   cancel: function() {
      this.transitionToRoute('friends.show', this);
      return false;
    }
  }
});
