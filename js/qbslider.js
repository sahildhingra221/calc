function qbSlider(qbsliderval,qbbs,qbbo,qbbc,qblo,qblc) {
  
  var qbsliderval = parseFloat(qbsliderval).toFixed(2); 
  //document.getElementById('qblsr').innerHTML = qbsliderval;
  
  var qbbs = document.getElementById("qbbs").value;
  var qbbo = document.getElementById("qbbo").value;
  var qbbc = document.getElementById("qbbc").value;
  var qblo = document.getElementById("qblo").value;
  var qblc = document.getElementById("qblc").value;
  
  //Calculating Percentage
  
  var qbbcp = qbbc / 100;
  var qblcp = qblc / 100;
  
  //Calculating 
  //Lay Stake
  
  var qblsr = qbsliderval;
  
  //Back
  
  var qbbb = (qbbs * qbbo - qbbs) * (1 - qbbcp);
  var qbbe = -(qblsr * (qblo - 1));
  var qbbt = qbbb + qbbe;
  
  //Lay
  
  var qblb = -(qbbs);
  var qble = qblsr * (1 - qblcp);
  var qblt = qblb + qble;
  
  
  //Underlay
  //Lay Stake
  
  var qbulsr = (qbbs * (qbbo - (qbbo - 1) * qbbcp - 1)) / (qblo - 1);
  
  //Back
  
  var qbubb = qbbb;
  var qbube = -(qbulsr * (qblo - 1));
  var qbubt = qbubb + qbube;
  
  //Lay
  
  var qbulb = qblb;
  var qbule = qbulsr * (1 - qblcp);
  var qbult = qbulb + qbule;
  
  //Overlay
  //Lay Stake
  
  var qbolsr = qbbs * (1 + qblcp);
  
  //Back
  
  var qbobb = qbbs * (qbbo - 1) * (1 - qbbcp);
  var qbobe = -(qbolsr * (qblo - 1));
  var qbobt = qbobb + qbobe;
  
  //Lay
  
  var qbolb = qblb;
  var qbole = qbolsr * (1 - qblcp);
  var qbolt = qbolb + qbole;
  
  
  //Displaying
  //Lay Stake Required
  
  document.getElementById("qblsr").innerHTML = qbsliderval;
  
  //Graph
  //Back
  
  $(".qbbb").text(qbbb.toFixed(2));
  $(".qbbe").text(qbbe.toFixed(2));
  $(".qbbt").text(qbbt.toFixed(2));
  
  //Lay
  
  $(".qblb").text(qblb.toFixed(2));
  $(".qble").text(qble.toFixed(2));
  $(".qblt").text(qblt.toFixed(2));  
}