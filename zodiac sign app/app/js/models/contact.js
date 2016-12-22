ContactManager.Models.Contact = Backbone.Model.extend({
  defaults: {
    name: null,
    dob: null,
    pob: null,
    avatar: null
  },

  initialize: function() {
    this.set('avatar', _.random(1, 12) + '.jpg');
  }
});
