HeelHook.module("ClimbList", function(ClimbList) {

  HeelHook.ClimbItem = Marionette.ItemView.extend({
    tagName: "div",
    id: "climb-item",
    template: "#climb-list-item",
    initialize: function() {
      log("ClimbItem.Initialize");
    }

  });

  HeelHook.ClimbList = Marionette.CollectionView.extend({

    tagName: "div",
    id: "climb-list",
    class: "list-group",
    template: "#list-template",
    childView: HeelHook.ClimbItem,

    initialize: function() {
      log("ClimbList.Initialize")
    }

  });
});