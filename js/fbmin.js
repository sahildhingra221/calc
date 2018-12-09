function fbMin() {
  var fbslidermin = document.getElementById("fbslider").min;
  var fbslidermax = document.getElementById("fbslider").max;
  var fbslidermid = (fbslidermax - fbslidermin) / 2 + (fbslidermid);
  document.getElementById("fbslider").value = fbslidermid;
  
  var fbmin = document.getElementById("fbmin").value;
  var fbmidval = document.getElementById("fbstandardvalfix").innerHTML;
  if (fbmin > fbmidval) {
    var nfbmin = fbmidval - 0.01;
    document.getElementById("fbmin").value = nfbmin;
    document.getElementById("fbslider").min = nfbmin;
  } else {
    document.getElementById("fbslider").min = fbmin;
  }
  
  fbslidermid = (fbslidermax - fbslidermin) / 2 + (fbslidermid);
  document.getElementById("fbslider").value = fbslidermid;
}