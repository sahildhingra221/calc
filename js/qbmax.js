function qbMax() {
  var qbslidermin = document.getElementById("qbslider").min;
  var qbslidermax = document.getElementById("qbslider").max;
  var qbslidermid = (qbslidermax - qbslidermin) / 2 + (qbslidermid);
  document.getElementById("qbslider").value = qbslidermid;
  
  var qbmax = document.getElementById("qbmax").value;
  document.getElementById("qbslider").max = qbmax;
  
  qbslidermid = (qbslidermax - qbslidermin) / 2 + (qbslidermid);
  document.getElementById("qbslider").value = qbslidermid;
}