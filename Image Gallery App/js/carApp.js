var lamborghini = new app.singleFlower({
  name: "Lamborghini",
  price: 399995,
  color: "White",
  img: "images/lamborghini.jpg",
  link: "lamborghini"
});

var ferrari = new app.singleFlower({
  name: "Ferrari",
  price: 299995,
  color: "black",
  img: "images/ferrari.jpg",
  link: "ferrari"
});

var mcLaren = new app.singleFlower({
  name: "McLaren",
  price: 199995,
  img: "images/mcLaren.jpg",
  link: "mcLaren"
});

var flowerGroup = new app.FlowersCollection([
  lamborghini, ferrari, mcLaren
]);
debugger;
var flowerGroupView = new app.allFlowersView({ collection: flowerGroup});

$("#allFlowers").html(flowerGroupView.render().el);

var flowerRouter = new app.Router();

Backbone.history.start();