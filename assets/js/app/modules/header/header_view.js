HeelHook.module("Header", function(Header) {


  HeelHook.HeaderView = Marionette.ItemView.extend({
    template: "#header",
    className: "navbar navbar-inverse navbar-fixed-top",

    ui: {
      navigation : '.bs-navbar-collapse',
      newEntryButton : '.js-add',
      newEntryFormDisplay : '.navbar-new-entry',
      submitButton : '.js-submit',
      newEntryForm : '.new-entry-form'
    },

    events: {
      'click @ui.newEntryButton' : 'addEntry',
      'click @ui.submitButton' : 'submitEntry'
    },

    initialize: function() {
      console.log("intitializing")
    },

    addEntry: function() {
      this.ui.navigation.collapse('hide');
      var that = this;
      $(this.ui.navigation).on('hidden.bs.collapse', function () {
        $(this.ui.newEntryFormDisplay).collapse('show');

      }.bind(this) );
    },

    submitEntry: function(e) {
      e.preventDefault();
      console.log("entry submit");
      console.log(this.$(this.ui.newEntryForm));
      var name = this.$('.new-entry-form' + ' input[name=title]').val()
      var difficulty = this.$('.new-entry-form' + ' input[name=difficulty]:checked').val()
      var success = this.$('.new-entry-form' + ' input[name=success]:checked').val()
      console.log(name, success, difficulty);
      // hide the form
      $(this.ui.newEntryFormDisplay).collapse('hide');

    }

  });



});