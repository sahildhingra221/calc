var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var accrpanel = this.nextElementSibling;
    if (accrpanel.style.maxHeight){
      accrpanel.style.maxHeight = null;
    } else {
      accrpanel.style.maxHeight = accrpanel.scrollHeight + "px";
    } 
  });
}