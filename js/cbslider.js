function cbSlider(cbsliderval,cbbs,cbcs,cbbo,cbbc,cblo,cblc) {
  var cbsliderval = parseFloat(cbsliderval).toFixed(2);
  document.getElementById("cblsr").innerHTML = cbsliderval;
  var cbbs = document.getElementById("cbbs").value;
  var cbcs = document.getElementById("cbcs").value;
  var cbbo = document.getElementById("cbbo").value;
  var cbbc = document.getElementById("cbbc").value;
  var cblo = document.getElementById("cblo").value;
  var cblc = document.getElementById("cblc").value;
  
  //Calculating Percentage

  var cbbcp = cbbc / 100;
  var cblcp = cblc / 100;

  //Calculating 
  //Lay Stake

  var cblsr = cbsliderval;

  //Back

  var cbbb = (cbbs * cbbo - cbbs) * (1 - cbbcp);
  var cbbe = -(cblsr * (cblo - 1));
  var cbbcs = 0;
  var cbbt = cbbb + cbbe;

  //Lay

  var cblb = -(cbbs);
  var cble = cblsr * (1 - cblcp);
  var cblcs = +(cbcs);
  var cblt = cblb + cble + cblcs;


  //Underlay
  //Lay Stake

  var cbulsr = (cbbs - cbcs * (1 - cbbcp)) / (1 - cblcp);

  //Back

  var cbubb = (cbbs * cbbo - cbbs) * (1 - cbbcp);
  var cbube = -(cbulsr * (cblo - 1));
  var cbubcs = 0;
  var cbubt = cbubb + cbube + cbubcs;

  //Lay

  var cbulb = -(cbbs);
  var cbule = cbulsr * (1 - cblcp);
  var cbulcs = +(cbcs);
  var cbult = cbulb + cbule + (cbulcs);

  //Overlay
  //Lay Stake

  var cbolsr = (cbbo - 1) * cbbs * (1 - cbbcp) / (cblo - 1);

  //Back

  var cbobb = cbbs * (cbbo - 1) * (1 - cbbcp);
  var cbobe = -(cbolsr * (cblo - 1));
  var cbobcs = 0;
  var cbobt = cbobb + cbobe + cbobcs;

  //Lay

  var cbolb = -(cbbs);
  var cbole = cbolsr * (1 - cblcp);
  var cbolcs = +(cbcs);
  var cbolt = cbolb + cbole + cbolcs;
  
  //Displaying
  //Lay Stake Required
  
  document.getElementById("cblsr").innerHTML = cbsliderval;
  
  //Graph
  //Back
  
  $(".cbbb").text(cbbb.toFixed(2));
  $(".cbbe").text(cbbe.toFixed(2));
  $(".cbbt").text(cbbt.toFixed(2));
  
  //Lay
  
  $(".cblb").text(cblb.toFixed(2));
  $(".cble").text(cble.toFixed(2));
  $(".cblt").text(cblt.toFixed(2));  
  
}