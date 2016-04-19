$(document).ready(function(){

  /*--- Display information modal box ---*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });

});

 $(function(){
    $("#numberInput").submit(function(e) {       
      e.preventDefault();
    });
});


$(".new").bind("click", function(){
        var ranNum = Math.floor(Math.random() * 100) + 1;
        console.log(ranNum);
        $('#numberInput')[0].reset();
        $('#count').html('0');
        $('#feedback').html('Make your Guess!');
        $('#guessList').empty();
        pastguess.length = 0;
});

var ranNum = Math.floor(Math.random() * 100) + 1;
console.log(ranNum);

var numbered;
var oldNumber = 0;
var pastguess = [];

function inputCheck() {

    //numbered = document.forms["numberInput"]["userGuess"].value;
  numbered = $("#userGuess").val();
  //document(javascript) = $(document) JQuery 
    // if not a number show alert
    if (numbered.length == 0) {
        $("#feedback").html("Must input something");
        return;
    } if($.isNumeric(numbered)) {
        numbered = parseInt(numbered);
    } else {
    $("#feedback").html("Must input numbers");
        return;
  }

  var diff = Math.abs(oldNumber - ranNum);
  var diff_new = Math.abs(numbered - ranNum);

if(numbered == 0){
    $("#feedback").html("please guess again, you guessed zero!");
}else{
      if (ranNum == numbered){
        $("#feedback").html( "It's a match!" );
      }else if (diff > diff_new) {
          $("#feedback").html( "Hotter" );
          oldNumber = numbered;
          // every time you put in an old number, you have old number at top as a --DONE !
          if ($.inArray(oldNumber,pastguess) == -1){
            pastguess.push(oldNumber);
            $('#guessList').append('<li>' + oldNumber + '</li>');
            $("#count").html(pastguess.length);
          }
      } else if (diff < diff_new) {
          $("#feedback").html( "Colder" );
          oldNumber = numbered;
           // every time you put in an old number, you have old number at top as a --DONE !
          if ($.inArray(oldNumber,pastguess) == -1){
            pastguess.push(oldNumber);
            $('#guessList').append('<li>' + oldNumber + '</li>');
            $("#count").html(pastguess.length);
          }
      } else {
        $("#feedback").html("You cannot guess the same number");
      }
}



/*
    var diff = Math.abs(ranNum - numbered);
    if (ranNum > numbered) {
        alert("ranNum is greater than your number by: " + diff);
    } else if (ranNum < numbered) {
        alert("ranNum is less then your number by: " + diff);
    } else if (ranNum === numbered) {
        alert("match");
    } else {
        alert("try again");
    }*/

}