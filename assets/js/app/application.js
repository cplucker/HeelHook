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



  HeelHook.execute('climblist:module:show', HeelHook.mainRegion);

});

$(document).ready(function() {
  HeelHook.start(options);
});


$('.lines-button').on('click', function() {
  $(this).toggleClass('close');
});

