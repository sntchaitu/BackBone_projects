app = app || {};

app.models.Receipe = Backbone.Model.extend({
	defaults: {
		'ID': '',
		'firstname': '',
		'receipename': '',
		'directions': '',
		'homephone': '',
		'vegan': ''
	},
	
	initialize: function() {
		var self = this;
		if(this.get('vegan') === 'yes') {
			self.set('type', 'Vegan');
		} else {
			self.set('type', 'Non Vegan');
		}
	}
	
});

app.collections.ReceipeList = Backbone.Collection.extend({
	
	model: app.models.Receipe,
	
	comparator: function(receipe) {
		return receipe.get('receipename');
	}
	
});