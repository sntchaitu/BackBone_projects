// Namespace our flowerApp
var app = app || {};

app.Router = Backbone.Router.extend({

routes :{
	"": "noCopy",
	"ferrari" : "ferrariMessage",
	"mcLaren": "mcLarenMessage",
	"lamborghini" : "lamborghiniMessage"
},

noCopy: function() {
  $("#copy").html("");
},

lamborghiniMessage: function() {
  $("#copy").html(" Lamborghini is an Italian brand and manufacturer of luxury sports cars and, formerly, SUVs, which is owned by the Volkswagen Group through its subsidiary brand division Audi. Lamborghini's production facility and headquarters are located in Sant'Agata Bolognese, Italy. In 2011, Lamborghini's 831 employees produced 1,711 vehicles.");
},

mcLarenMessage: function() {
  $("#copy").html("McLaren Automotive, commonly referred to as McLaren is a British automotive manufacturer of luxury, high-performance sports cars, located at the McLaren Technology Centre (MTC) in Woking, Surrey.");
},

ferrariMessage: function() {
  $("#copy").html("Ferrari is an Italian sports car manufacturer based in Maranello. Founded by Enzo Ferrari in 1939 as Auto Avio Costruzioni, the company built its first car in 1940. However, the company's inception as an auto manufacturer is usually recognized in 1947 when the first Ferrari-badged car was completed.");
}

});


