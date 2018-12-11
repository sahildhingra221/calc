function checkingFn() {
  var vala = document.getElementById("fbbs").value;
  if(vala === "") {
    $(".fbbs").removeClass('has-value');
  } else {
    $(".fbbs").addClass('has-value');
  }
}