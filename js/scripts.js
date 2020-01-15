$(document).ready(function() {
$(".btn").click(function() {
    var beverage = $("#beverage").val();
    $("#output").append(beverage);
    $("#output").show();
    
    event.preventDefault();
    });
  });