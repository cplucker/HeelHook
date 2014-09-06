HeelHook.module("ClimbList", function(ClimbList) {

  var climbListView = null;

  ClimbList.Controller = Marionette.Controller.extend({

    showClimbList: function(region) {
      log("ClimbList.showClimbList");

      var collection = new HeelHook.Entities.ClimbCollection();
      collection.fetch()
      .fail(function() {
        // TODO present error to the user
        console.log("Error: Failed to fetch collection from local straoge");
      })
      .done(function() {
        climbListView = new HeelHook.ClimbList({collection: collection});
        region.show(climbListView);
      });

    },

    addEntry: function(model) {
      log("ClimbList.addEntry");
      climbListView.collection.create(model);
    }

  });

  var controller = new ClimbList.Controller();

  HeelHook.commands.setHandler('climblist:module:show', function(region) {
    controller.showClimbList(region)
  });

  HeelHook.commands.setHandler('climblist:module:newclimb', function(model) {
    controller.addEntry(model);
  });

});
