function cbMax() {
  var cbslidermin = document.getElementById("cbslider").min;
  var cbslidermax = document.getElementById("cbslider").max;
  var cbslidermid = (cbslidermax - cbslidermin) / 2 + (cbslidermid);
  document.getElementById("cbslider").value = cbslidermid;
  
  var cbmax = document.getElementById("cbmax").value;
  document.getElementById("cbslider").max = cbmax;
  
  cbslidermid = (cbslidermax - cbslidermin) / 2 + (cbslidermid);
  document.getElementById("cbslider").value = cbslidermid;
}