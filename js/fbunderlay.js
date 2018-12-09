function fbUnderlay() {
  var fbbs = $('input[name=fbbs]').val()-0;
  var fbbo = $('input[name=fbbo]').val()-0;
  var fbbc = $('input[name=fbbc]').val()-0;
  var fblo = $('input[name=fblo]').val()-0;
  var fblc = $('input[name=fblc]').val()-0;
  
  //Calculating Percentage
  
  var fbbcp = fbbc / 100;
  var fblcp = fblc / 100;
  
  //Calculating 
  //Lay Stake

  var fblsr = (fbbo - 1 - (fbbo - 1) * fbbcp) * (fbbs) / (fblo - fblcp);

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
  //Lay Stake Required and Standard Value
  
  $(".fbstandardvalfix").text(fblsr.toFixed(2));
  $(".fblsr").text(fbulsr.toFixed(2)); 

  //Graph
  //Back

  $(".fbbb").text(fbubb.toFixed(2));
  $(".fbbe").text(fbube.toFixed(2));
  $(".fbbt").text(fbubt.toFixed(2));

  //Lay

  $(".fblb").text(fbulb.toFixed(2));
  $(".fble").text(fbule.toFixed(2));
  $(".fblt").text(fbult.toFixed(2));

  //Underlay

  $(".fbulsr").text(fbulsr.toFixed(2));
  $(".fbutel").text(fbube.toFixed(2));
  $(".fbubw").text(fbubt.toFixed(2));
  $(".fbulw").text(fbult.toFixed(2));

  //Overlay

  $(".fbolsr").text(fbolsr.toFixed(2));
  $(".fbotel").text(fbobe.toFixed(2));
  $(".fbobw").text(fbobt.toFixed(2));
  $(".fbolw").text(fbolt.toFixed(2));

  //Range Slider

  var fbslidermid = (fbolsr - fblsr) + (35 / 100);
  var fbslidermin = fblsr - fbslidermid; 
  var fbslidermax = fblsr + fbslidermid; 

  $(".fbmin").val(fbslidermin.toFixed(2));
  $(".fbmax").val(fbslidermax.toFixed(2));

  document.getElementById("fbslider").min = fbslidermin;
  document.getElementById("fbslider").max = fbslidermax;
  document.getElementById("fbslider").value = fbulsr;

}