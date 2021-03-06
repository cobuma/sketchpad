var dim = 50;

$(document).ready(function() {
	$("body").append("<div id=container></div>");
	create_grid(dim);
	sketch();
	reset();
	rgb_reset();
});

function create_grid(num){
	$("#container").prepend("<table></table>")
	for (var i = 0; i < num; i++) {
		$("table").append("<tr class='row"+i+"'>");
		for (var j = 0; j < num; j++) {
			$(".row"+i).append("<td></td>");
		};
	};

};

function reset(){
	$("#new").click(function() {
		var dim = prompt("Dimension of new grid: (2-80)");
		$("table").remove();
		create_grid(dim);
		sketch();
	});
};

function rgb_reset(){
	$("#rgb").click(function() {
		var dim = prompt("Dimension of new grid: (2-80)");
		$("table").remove();
		create_grid(dim);
		rgb();
	});
};

function sketch(){
	$("td").mouseenter(function() {
		$(this).addClass("entered");
	});
	$("td").mouseleave(function() {
		$(this).fadeOut("slow");
	});
};

function rgb(){
	$("td").mouseenter(function() {
		var hue = 'rgb('
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ')';
		$(this).css("background-color", hue);
	});
};

