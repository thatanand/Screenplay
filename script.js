var darkMode = false;
setLightMode();


function setLightMode(){
  if (darkMode == false){
      darkMode = true;
      $("html").css({'background-color':'#212121', 'color' : 'white'});
      $(".screenplay-logo").css("color", "white");
      $(".switch").css("color", "white");
      $(".print").css("color", "white");
      $(".script").css("background-color", "#b7b7b7");
  }
else  if (darkMode == true){
      darkMode = false;
      $("html").css({'background-color': '#eaeaea', 'color' : '#212121'});
      $(".screenplay-logo").css("color", "#212121");
      $(".switch").css("color", "#212121");
      $(".print").css("color", "#212121");
      $(".script").css("background-color", "#f7f7f7");
  }
}

$(".print").click(function() {
  window.print();

  });

$(".switch").click(function() {
if (darkMode == false){
    darkMode = true;
    $("html").css({'background-color':'#212121', 'color' : 'white'});
    $(".screenplay-logo").css("color", "white");
    $(".switch").css("color", "white");
    $(".print").css("color", "white");
    $(".script").css("background-color", "#b7b7b7");
}
else if (darkMode == true){
    darkMode = false;
    $("html").css({'background-color': '#eaeaea', 'color' : '#212121'});
    $(".screenplay-logo").css("color", "#212121");
    $(".switch").css("color", "#212121");
    $(".print").css("color", "#212121");
    $(".script").css("background-color", "#f7f7f7");
}
});
