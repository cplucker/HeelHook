var HeelHook = new Marionette.Application();
console.log("new app")

var options = {
  env: "local"
}

HeelHook.addRegions({
  headerRegion: "#header-region",
  mainRegion: "#main-region"
});



HeelHook.on("start", function(){
  console.log("HeelHook has started!");
  if (Backbone.history){
    Backbone.history.start();
  }

  var headerView = new HeelHook.HeaderView(); 
  HeelHook.headerRegion.show(headerView);

  var collection = [];

  collection[0] = new HeelHook.Entities.LocalClimb({id: "1", "difficulty":"testDifficulty"});
  collection[1] = new HeelHook.Entities.LocalClimb({id: "2", "difficulty":"testDifficulty2"});


  var collectionEntity = new HeelHook.Entities.LocalClimbCollection(collection);


  console.log("collectionEntity", collectionEntity);

  var climbListView = new HeelHook.ClimbList({collection: collectionEntity});
  HeelHook.mainRegion.show(climbListView);


});

$(document).ready(function() {
  HeelHook.start(options);
});


$('.lines-button').on('click', function() {
  $(this).toggleClass('close');
});

