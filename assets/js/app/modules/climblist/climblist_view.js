HeelHook.module("ClimbList", function(ClimbList) {


  HeelHook.ClimbItem = Marionette.ItemView.extend({
    tagName: "li",
    id: "climb-item",
    template: "#climb-list-item",
    initialize: function() {
      console.log("initializing ClimbItem");
    }

  });

  HeelHook.ClimbList = Marionette.CollectionView.extend({

    tagName: "ul",
    id: "climb-list",
    template: "#list-template",
    childView: HeelHook.ClimbItem,

    initialize: function() {
      console.log("initializing ClimbList");
    }

  });

});
