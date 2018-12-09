function fbSlider(fbsliderval,fbbs,fbbo,fbbc,fblo,fblc) {
  
  var fbsliderval = parseFloat(fbsliderval).toFixed(2); 
  //document.getElementById('fblsr').innerHTML = fbsliderval;
  
  var fbbs = document.getElementById("fbbs").value;
  var fbbo = document.getElementById("fbbo").value;
  var fbbc = document.getElementById("fbbc").value;
  var fblo = document.getElementById("fblo").value;
  var fblc = document.getElementById("fblc").value;
  
  //Calculating Percentage

  var fbbcp = fbbc / 100;
  var fblcp = fblc / 100;

  //Calculating 
  //Lay Stake

  var fblsr = fbsliderval;

  //Back

  var fbbb = (fbbs * fbbo - fbbs) * (1 - fbbcp);
  var fbbe = -(fblsr * (fblo - 1));
  var fbbt = fbbb + fbbe;

  //Lay

  var fblb = 0;
  var fble = fblsr * (1 - fblcp);
  var fblt = fblb + fble;


  //Underlay
  //Lay Stake

  var fbulsr = 0;

  //Back

  var fbubb = (fbbs * fbbo - fbbs) * (1 - fbbcp);
  var fbube = -(fbulsr * (fblo - 1));
  var fbubt = fbubb + fbube;

  //Lay

  var fbulb = 0;
  var fbule = fbulsr * (1 - fblcp);
  var fbult = fbulb + fbule;

  //Overlay
  //Lay Stake

  var fbolsr = (fbbo - 1) * fbbs * (1 - fbbcp) / ((fblo - 1));

  //Back

  var fbobb = fbbs * (fbbo - 1) * (1 - fbbcp);
  var fbobe = -(fbolsr * (fblo - 1));
  var fbobt = fbobb + fbobe;

  //Lay

  var fbolb = 0;
  var fbole = fbolsr * (1 - fblcp);
  var fbolt = fbolb + fbole;
  
  
  //Displaying
  //Lay Stake Required
  
  document.getElementById("fblsr").innerHTML = fbsliderval;
  
  //Graph
  //Back
  
  $(".fbbb").text(fbbb.toFixed(2));
  $(".fbbe").text(fbbe.toFixed(2));
  $(".fbbt").text(fbbt.toFixed(2));
  
  //Lay
  
  $(".fblb").text(fblb.toFixed(2));
  $(".fble").text(fble.toFixed(2));
  $(".fblt").text(fblt.toFixed(2));  
}