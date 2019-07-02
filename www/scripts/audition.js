$(document).ready(function(){
  $("#auditionForm").on("submit", function() {
    var formValid = true;

    //Checking validity of the name
    var nameIsValid = $("#userNameAudition").prop("validity").valid;
    if(nameIsValid){
      $("#nameFeedback").addClass("hidden");
    }else{
      formValid= false;
      $("#nameFeedback").removeClass("hidden");
    }
    //Checking validity of the email
    var emailIsValid = $("#userEmailAudition").prop("validity").valid;
    if(emailIsValid){
      $("#emailFeedback").addClass("hidden");
    }else{
      formValid= false;
      $("#emailFeedback").removeClass("hidden");
    }
    //Checking validity of the grad year
    var yearIsValid = $("#year").prop("validity").valid;
    if(yearIsValid){
      $("#yearFeedback").addClass("hidden");
    }else{
      formValid= false;
      $("#yearFeedback").removeClass("hidden");
    }
    //Checking validity of the dance type
    var danceIsValid = $("#danceType").prop("validity").valid;
    if(danceIsValid){
      $("#danceError").addClass("hidden");
    }else{
      formValid= false;
      $("#danceError").removeClass("hidden");
    }
    return formValid;
  });
});
