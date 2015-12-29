var dim = 50;

$(document).ready(function() {
	$("body").append("<div id=container></div>");
	create_grid(dim);
	$("td").mouseenter(function() {
		$(this).addClass("entered");
	});
	$("td").mouseleave(function() {
		$(this).fadeOut("slow");
	});
});

function create_grid(num){
	$("#container").prepend("<table></table>")
	for (var i = 0; i < num; i++) {
		$("table").append("<tr class='row"+i+"'>");
		for (var j = 0; j < num; j++) {
			$(".row"+i).append("<td></td>");
		};
	};
}

function sketch(){
	mou
}