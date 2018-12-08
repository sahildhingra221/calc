function qbMin() {
  var qbslidermin = document.getElementById("qbslider").min;
  var qbslidermax = document.getElementById("qbslider").max;
  var qbslidermid = (qbslidermax - qbslidermin) / 2 + (qbslidermid);
  document.getElementById("qbslider").value = qbslidermid;
  
  var qbmin = document.getElementById("qbmin").value;
  var qbmidval = document.getElementById("qbstandardvalfix").innerHTML;
  if (qbmin > qbmidval) {
    var nqbmin = qbmidval - 0.01;
    document.getElementById("qbmin").value = nqbmin;
    document.getElementById("qbslider").min = nqbmin;
  } else {
    document.getElementById("qbslider").min = qbmin;
  }
  
  qbslidermid = (qbslidermax - qbslidermin) / 2 + (qbslidermid);
  document.getElementById("qbslider").value = qbslidermid;
}