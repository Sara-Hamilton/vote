$(document).ready(function() {
  $("#voteForm").submit(function(event){

  var ageInput = parseInt($("input#age").val());

  if (age < 18) {
    $('#underAge').show();
  } else {
    $('#ofAge').show();
  }

  event.preventDefault();
  });
});
