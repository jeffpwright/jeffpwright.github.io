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
	var employee = document.getElementById("Employee");
	employee.addEventListener('click', simpleClick, false);
	var registered = document.getElementById("Registered");
	registered.addEventListener('click', eventClick, false);
}

function simpleClick(e)
{
	var cb = document.getElementById("check" + e.target.id);
	cb.click();
}

function eventClick(e)
{
	var event = document.createEvent("MouseEvents");
	event.initMouseEvent("click", true, true, window, 0,0,0,0,0, false, false, false, false, 0, null);
	var cb = document.getElementById("check" + e.target.id);
	cb.dispatchEvent(event);
}
