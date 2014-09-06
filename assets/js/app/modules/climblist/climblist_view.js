HeelHook.module("ClimbList", function(ClimbList) {


  HeelHook.ClimbItem = Marionette.ItemView.extend({
    tagName: "div",
    id: "climb-item",
    template: "#climb-list-item",
    initialize: function() {
      console.log("initializing ClimbItem");
    }

  });

  HeelHook.ClimbList = Marionette.CollectionView.extend({

    tagName: "div",
    id: "climb-list",
    class: "list-group",
    template: "#list-template",
    childView: HeelHook.ClimbItem,

    initialize: function() {
      console.log("initializing ClimbList");
    }

  });

});


/*
<div class="list-group">
    <a href="http://ch.tbe.taleo.net/CH01/ats/careers/jobSearch.jsp?org=INTECLLC&cws=1" class="list-group-item">
    <h4 class="list-group-item-heading"><strong>Our Jobs</strong></h4>
    <p class="list-group-item-text">Browse our job listings</p></a>
    <a href="benefits.php" class="list-group-item active">
    <h4 class="list-group-item-heading"><em>Our Benefits</em></h4>
    <p class="list-group-item-text">Among the best in the industry</p></a>
    <a href="culture.php" class="list-group-item">
    <h4 class="list-group-item-heading"><strong>Our Culture</strong></h4>
    <p class="list-group-item-text">Life at InTec, LLC</p></a>
    </div>*/