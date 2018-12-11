$('input[name=fbbs], input[name=fbbo], input[name=fbbc], input[name=fblo], input[name=fblc]').keyup(function() {
  var fbbs = $.trim( $('input[name=fbbs]').val() );
  var fbbo = $.trim( $('input[name=fbbo]').val() );
  var fbbc = $.trim( $('input[name=fbbc]').val() );
  var fblo = $.trim( $('input[name=fblo]').val() );
  var fblc = $.trim( $('input[name=fblc]').val() );
  
  $(".cbbs").val(fbbs);
  $(".cbbs").addClass("has-value");
  $(".cbbo").val(fbbo);
  $(".cbbo").addClass("has-value");
  $(".cbbc").val(fbbc);
  $(".cbbc").addClass("has-value");
  $(".cblo").val(fblo);
  $(".cblo").addClass("has-value");
  $(".cblc").val(fblc);
  $(".cblc").addClass("has-value");
  
  $(".qbbs").val(fbbs);
  $(".qbbs").addClass("has-value");
  $(".qbbo").val(fbbo);
  $(".qbbo").addClass("has-value");
  $(".qbbc").val(fbbc);
  $(".qbbc").addClass("has-value");
  $(".qblo").val(fblo);
  $(".qblo").addClass("has-value");
  $(".qblc").val(fblc);
  $(".qblc").addClass("has-value");
  
  if(fbbs != "" && fbbo != "" && fbbc != "" && fblo != "" && fblc != "") {
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
    
    //Range Slider

    var fbslidermid = (fbolsr - fblsr) + (35 / 100);
    var fbslidermin = fblsr - fbslidermid; 
    var fbslidermax = fblsr + fbslidermid; 
    
    //Conditions NaN && Infinity
    if(isNaN(fbslidermin, fbslidermax, fblsr, fbbb, fbbe, fbbt, fblb, fble, fblt)) {
      fbslidermin = 0.00;
      fbslidermax = 0.00;
      fblsr = 0.00;
      fbbb = 0.00;
      fbbe = 0.00;
      fbbt = 0.00;
      fblb = 0.00;
      fble = 0.00;
      fblt = 0.00;
    }
    
    //Displaying
    //Lay Stake Required and Standard Value

    $(".fbstandardvalfix").text(fblsr.toFixed(2));
    $(".fblsr").text(fblsr.toFixed(2));

    //Graph
    //Back

    $(".fbbb").text(fbbb.toFixed(2));
    $(".fbbe").text(fbbe.toFixed(2));
    $(".fbbt").text(fbbt.toFixed(2));

    //Lay

    $(".fblb").text(fblb.toFixed(2));
    $(".fble").text(fble.toFixed(2));
    $(".fblt").text(fblt.toFixed(2));  
    
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

    $(".fbmin").val(fbslidermin.toFixed(2));
    $(".fbmax").val(fbslidermax.toFixed(2));

    document.getElementById("fbslider").min = fbslidermin;
    document.getElementById("fbslider").max = fbslidermax;
    document.getElementById("fbslider").value = fblsr;

  
  }
});