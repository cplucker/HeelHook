var HeelHook = new Marionette.Application();

var options = {
  env: "local"
}

// setup log4Javascript
window.logger = log4javascript.getRootLogger();
var browserConsoleAppender = new log4javascript.BrowserConsoleAppender();
logger.addAppender(browserConsoleAppender);

// short hand for debug logging
function log(message) {
  logger.debug(message);
}

HeelHook.addRegions({
  headerRegion: "#header-region",
  mainRegion: "#main-region"
});

HeelHook.on("start", function(){
  log("HeelHook start")
  
  if (Backbone.history){
    Backbone.history.start();
  }

  // Create and show header view
  var headerView = new HeelHook.HeaderView(); 
  HeelHook.headerRegion.show(headerView);

  // Show the main region
  HeelHook.execute('climblist:module:show', HeelHook.mainRegion);

});

$(document).ready(function() {
  // Start the application
  HeelHook.start(options);
});


