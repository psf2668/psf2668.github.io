$(document).ready(function() {


$("#btn-yes").click (function() {
	$("#result").html("<img src='boredgirl1.jpg' style='width:500px;'>");
});

$("#btn-no").click (function() {
	$("#result").html("<img src='boredgirl2.jpg' style='width:500px;'>");
});

$("#btn-cancel").click (function() {
	$("#result").html("");
});
});