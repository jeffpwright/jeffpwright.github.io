$(document).ready(function () 
{
$("input:eq(0)").click(function() 
{
	$("p").each(function()
	{
		var parts = $(this).html().split(" ");
		$(this).css({"font-size":parts[1]+"px", color:parts[0]});
	});
});
$("input:eq(1)").click(function()
{
	var items = $("p").map(function()
	{
		var parts = $(this).html().split(" ");
		return {color:parts[0], size:parts[1]};
		}).get();
		for (var idx in items)
		{
			var item = items[idx];
			var span = $("<span>" + item.color + "</span>");
			var size = item.size*5;
			span.css({"background-color":item.color, "font-size":item.size+"px", width:size, height:size});
			$("div").append(span);
		}
	});
});

function update()
{
	$("span").css("background-color", "lightgrey");
	$("div").slice(1).each(function(i)
	{
		var $input =$(this).children("input:first");
		var $value = $input.val();
		var filter = "span:lt(" + $value + ")";
		$input.siblings(filter).css("background-color", "blue");
	});
}	


