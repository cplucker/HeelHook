HeelHook.module("Header", function(Header) {

  HeelHook.HeaderView = Marionette.ItemView.extend({
    template: "#header",
    className: "navbar navbar-inverse navbar-fixed-top",

    ui: {
      navigation : '.bs-navbar-collapse',
      menuButton : '.navbar-toggle',
      newEntryButton : '.js-add',
      newEntryFormDisplay : '.navbar-new-entry',
      submitButton : '.js-submit',
      newEntryForm : '.new-entry-form'
    },

    events: {
      'click @ui.newEntryButton' : 'addEntry',
      'click @ui.submitButton' : 'submitEntry',
      'click @ui.menuButton' : 'toggleMenuButton'
    },

    addEntry: function() {
      log("HeaderView.addEntry");
      this.ui.navigation.collapse('hide');
      var that = this;
      $(this.ui.navigation).on('hidden.bs.collapse', function () {
        $(this.ui.newEntryFormDisplay).collapse('show');

      }.bind(this) );
    },

    submitEntry: function(e) {
      log("HeaderView.submitEntry");
      e.preventDefault();

      var name = this.$('.new-entry-form' + ' input[name=title]').val();
      var difficulty = this.$('.new-entry-form' + ' input[name=difficulty]:checked').val();
      var success = this.$('.new-entry-form' + ' input[name=success]:checked').val();

      // hide the form
      $(this.ui.newEntryFormDisplay).collapse('hide');

      var newClimb = new HeelHook.Entities.Climb({
        name: name,
        difficulty: difficulty,
        success: success
      });

      HeelHook.execute('climblist:module:newclimb', newClimb);
    },

    toggleMenuButton: function() {
      $(this.ui.menuButton).toggleClass('close');
    }
  });
});