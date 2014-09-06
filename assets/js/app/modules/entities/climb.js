HeelHook.module("Entities", function(Entities) {

  Entities.Climb = Backbone.Model.extend({
    // TODO: consider setting some defaults
  });

  Entities.ClimbCollection = Backbone.Collection.extend({
    model: Entities.Climb,
    
    localStorage: new Backbone.LocalStorage("LocalClimbCollection"), // Unique name within your app.
  });

});
