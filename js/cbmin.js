function cbMin() {
  var cbslidermin = document.getElementById("cbslider").min;
  var cbslidermax = document.getElementById("cbslider").max;
  var cbslidermid = (cbslidermax - cbslidermin) / 2 + (cbslidermid);
  document.getElementById("cbslider").value = cbslidermid;
  
  var cbmin = document.getElementById("cbmin").value;
  var cbmidval = document.getElementById("cbstandardvalfix").innerHTML;
  if (cbmin > cbmidval) {
    var ncbmin = cbmidval - 0.01;
    document.getElementById("cbmin").value = ncbmin;
    document.getElementById("cbslider").min = ncbmin;
  } else {
    document.getElementById("cbslider").min = cbmin;
  }
  
  cbslidermid = (cbslidermax - cbslidermin) / 2 + (cbslidermid);
  document.getElementById("cbslider").value = cbslidermid;
}