$(document).ready(function(){
  $("#contactUs").on("submit", function() {
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

    return formValid;
  });
});
