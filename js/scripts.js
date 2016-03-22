$(document).ready(function() {
  // $("h1").click(function() {
  //   alert("This is a header.");
  // });
  //
  // $("h2").click(function() {
  //   alert("This is a smaller heading.");
  // });
  //
  // $("p").click(function() {
  //   alert("This is a paragraph.");
  // });
  //
  // $("img").click(function() {
  //   alert("This is an image.");
  // });
  //
  // $("ul").dblclick(function() {
  //   alert("This is an unordered list.");
  // });

  $("#first .clickable").click(function(){
    $("#show-walrus").toggle();
    $("#hide-walrus").toggle();
  });

  $("#second .clickable").click(function(){
    $("#show-walrus-action").toggle();
    $("#hide-walrus-action").toggle();
  });

  $("#third .clickable").click(function(){
    $("#show-walrus-baby").slideToggle();
    $("#hide-walrus-baby").slideToggle();
  });

  $("#fourth .clickable").click(function(){
    $("#show-walrus-fat").toggle();
    $("#hide-walrus-fat").toggle();
  });

  $("#second .clickhere").click(function(){
    $(".picture").toggleClass("size");
  });

  $("#second .clickhere").click(function(){
    $("body").toggleClass("background");
    $(".container").toggleClass("newtext");
  });
});
