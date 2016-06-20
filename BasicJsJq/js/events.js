function clickHandler(e)
{
	alert(e.target.id + " says " + e.data.answer + " at X position: " + e.screenX);
	$("#"+e.data.objId).html(e.target.id + " says " + e.data.answer + " at X position: " + e.screenX);
}

$(document).ready(function()
{
	$("#div1").on({"click":clickHandler},{objId:"heading", "answer":"yes"});
	$(document).on("click", "#div2", {"objId":"heading", "answer":"no"}, clickHandler);
});

function yesWrapper(e)
{
	clickHandler(e, "heading", 1, "yes");
	e.target.removeEventListener('click', yesWrapper);
}

function noWrapper(e)
{
	clickHandler(e, "heading", 2, "no");
	e.target.removeEventListener('click', noWrapper);
}

function onloadHandler()
{
	document.getElementById("div1").addEventListener('click', yesWrapper, false);
	document.getElementById("div2").addEventListener('click', noWrapper, false);
}
