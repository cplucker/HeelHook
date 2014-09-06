HeelHook.module("ClimbList", function(ClimbList) {

  var climbListView = null;

  ClimbList.Controller = Marionette.Controller.extend({


    showClimbList: function(region) {
      console.log("showing climb list");

      // hardcoding some test values to display
      var fakeCollection = [];
      fakeCollection[0] = new HeelHook.Entities.LocalClimb({id: "1", "difficulty":"testDifficulty", "name": "Climb1"});
      fakeCollection[1] = new HeelHook.Entities.LocalClimb({id: "2", "difficulty":"testDifficulty2", "name": "Climb2"});
      var fakeCollectionEntity = new HeelHook.Entities.LocalClimbCollection(fakeCollection);


      var collection = new HeelHook.Entities.LocalClimbCollection();
      collection.fetch()
      .fail(function() {
        // TODO present error to the user
        console.log("Error: Failed to fetch collection from local straoge");
      })
      .done(function() {
        climbListView = new HeelHook.ClimbList({collection: collection});
        region.show(climbListView);
      })


      //climbListView = new HeelHook.ClimbList({collection: collectionEntity});

      //region.show(climbListView);





/*
      // Proof of concept to save to lcao storage
      var localCollection = new HeelHook.Entities.LocalClimbCollection();
      console.log("about to fetch");
      localCollection.fetch()
        .fail(function() {
        console.log("fetch failed");
      })
        .done(function() {
          console.log("fetch done");
        })
      //collectionEntity.create({id: "1", "difficulty":"testDifficulty", "name": "Climb1"})
      console.log("done fetch:", localCollection);

      localCollection.add({
        id: "1",
        difficulty: "localDifficulty1",
        name: "localName1"
      });

      localCollection.add({
        id: "2",
        difficulty: "localDifficulty2",
        name: "localName2"
      });

      console.log("localCollection", localCollection);

      localCollection.each(function(climb) {
          climb.save();
      });

      localCollection.create({
        id: "4",
        difficulty: "localDifficulty3",
        name: "localName3"
      });

      var fetchedCollection = new HeelHook.Entities.LocalClimbCollection();

      console.log("fetched:", fetchedCollection);

      fetchedCollection.fetch();

      fetchedCollection.fetch()
        .fail(function() {
        console.log("fetch failed");
      })
        .done(function() {
          console.log("fetch done");
      console.log("fetched2:", fetchedCollection);

        })

      console.log("fetched3:", fetchedCollection);


      var ls = new Backbone.LocalStorage("LocalClimb");
      console.log("ls",ls.findAll());

*/
    },

    addEntry: function(model) {
      console.log("add entry");
      var testModel = new HeelHook.Entities.ClimbItem({id:"9000"})
      climbListView.collection.create(testModel);
    }

  });

  var controller = new ClimbList.Controller();

  HeelHook.commands.setHandler('climblist:module:show', function(region) {
    controller.showClimbList(region)
  });

  HeelHook.commands.setHandler('climblist:module:newentry', function(model) {
    controller.showClimbList(region)
  });

});
