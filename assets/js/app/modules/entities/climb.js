HeelHook.module("Entities", function(Entities) {

 
  Entities.LocalClimb = Backbone.Model.extend({
    localStorage: new Backbone.LocalStorage("LocalClimb"), // Unique name within your app.
  });

  Entities.LocalClimbCollection = Backbone.Collection.extend({
    model: Entities.LocalClimb,
    
    localStorage: new Backbone.LocalStorage("LocalClimbCollection"), // Unique name within your app.

  });




});
