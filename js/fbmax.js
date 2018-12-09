function fbMax() {
  var fbslidermin = document.getElementById("fbslider").min;
  var fbslidermax = document.getElementById("fbslider").max;
  var fbslidermid = (fbslidermax - fbslidermin) / 2 + (fbslidermid);
  document.getElementById("fbslider").value = fbslidermid;
  
  var fbmax = document.getElementById("fbmax").value;
  document.getElementById("fbslider").max = fbmax;
  
  fbslidermid = (fbslidermax - fbslidermin) / 2 + (fbslidermid);
  document.getElementById("fbslider").value = fbslidermid;
}