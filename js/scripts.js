$(document).ready(function(){
  $("#word-play").submit(function(event){
    event.preventDefault();
    var userInput = $("input#sentence").val();
    var splitStrings = userInput.split(" ");
    var newArrays = splitStrings.filter(string => string.length >= 3);
    newArrays.reverse();
    var newString = newArrays.join();
    $("#output").text(newString);

  });

});
