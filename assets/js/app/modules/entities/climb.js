HeelHook.module("Entities", function(Entities) {

 
  Entities.LocalClimb = Backbone.Model.extend({
    // TODO: consider setting some defaults
  });

  Entities.LocalClimbCollection = Backbone.Collection.extend({
    model: Entities.LocalClimb,
    
    localStorage: new Backbone.LocalStorage("LocalClimbCollection"), // Unique name within your app.

  });




});
