import FriendsBaseController from './base';

export default FriendsBaseController.extend({
  actions: {
    cancel: function() {
      this.transiotniToRoute('friends.index');
      return false;
    }
  }
});
