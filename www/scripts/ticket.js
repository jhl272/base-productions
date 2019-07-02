$(document).ready(function(){
  $("#ticketForm").on("submit", function() {
    var formValid = true;

    //Checking validity of the name
    var nameIsValid = $("#userName").prop("validity").valid;
    if(nameIsValid){
      $("#nameFeedback").addClass("hidden");
    }else{
      formValid= false;
      $("#nameFeedback").removeClass("hidden");
    }
    //Checking validity of the email
    var emailIsValid = $("#userEmail").prop("validity").valid;
    if(emailIsValid){
      $("#emailFeedback").addClass("hidden");
    }else{
      formValid= false;
      $("#emailFeedback").removeClass("hidden");
    }
    //Checking validity of the number of tickets
    var ticketIsValid = $("#numTickets").prop("validity").valid;
    if(ticketIsValid){
      $("#ticketFeedback").addClass("hidden");
    }else{
      formValid= false;
      $("#ticketFeedback").removeClass("hidden");
    }

    return formValid;
  });
});
