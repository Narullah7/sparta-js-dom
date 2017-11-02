var listItems = ["Go out","Come back" , "Buy food" , "Eat food"];



function addListItem(value) {
  $(listItems).each(function(index,number){
    $("#list").append($("<li>" + number + "</li>"));
  })
  $("li:odd").css("color","blue");
}
addListItem();
$("#count").html($("li").length);
