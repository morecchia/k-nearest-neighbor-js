var getData = function () { 
	return $.getJSON("./data/data.json"); 
};

var run = function (kInput) {

	var homes = new KNN.ItemList(kInput);
	
	$.when(getData().done(function (json) {

		$.each(json.data, function (k,v) {
			homes.add( new KNN.Item(v) );
		});
		
	}).then(function () {

		var random_rooms = Math.round( Math.random() * 10 );
		var random_area = Math.round( Math.random() * 2000 );
		
		homes.add( new KNN.Item({rooms: random_rooms, area: random_area, type: false}) );
		homes.determineUnknown();
		homes.draw("homes");
		
	}).fail(function () {
	
		alert("there was an error!");
		
	}));
};

$("button#run").click(function () {
	var $input = $('#kInput').val();
	run($input); 
});