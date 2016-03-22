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

  $(".clickable").click(function(){
    $("#show-walrus").toggle();
    $("#hide-walrus").toggle();
  });

});
