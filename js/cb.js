$('input[name=cbbs], input[name=cbcs], input[name=cbbo], input[name=cbbc], input[name=cblo], input[name=cblc]').keyup(function() {
  var cbbs = $.trim( $('input[name=cbbs]').val() );
  var cbcs = $.trim( $('input[name=cbcs]').val() );
  var cbbo = $.trim( $('input[name=cbbo]').val() );
  var cbbc = $.trim( $('input[name=cbbc]').val() );
  var cblo = $.trim( $('input[name=cblo]').val() );
  var cblc = $.trim( $('input[name=cblc]').val() );
  
  var qbbs = cbbs;
  var qbbo = cbbo;
  var qbbc = cbbc;
  var qblo = cblo;
  var qblc = cblc;
  
  var fbbs = cbbs;
  var fbbo = cbbo;
  var fbbc = cbbc;
  var fblo = cblo;
  var fblc = cblc;
  
  $(".fbbs").val(cbbs);
  $(".fbbs").addClass("has-value");
  $(".fbbo").val(cbbo);
  $(".fbbo").addClass("has-value");
  $(".fbbc").val(cbbc);
  $(".fbbc").addClass("has-value");
  $(".fblo").val(cblo);
  $(".fblo").addClass("has-value");
  $(".fblc").val(cblc);
  $(".fblc").addClass("has-value");
  
  $(".qbbs").val(cbbs);
  $(".qbbs").addClass("has-value");
  $(".qbbo").val(cbbo);
  $(".qbbo").addClass("has-value");
  $(".qbbc").val(cbbc);
  $(".qbbc").addClass("has-value");
  $(".qblo").val(cblo);
  $(".qblo").addClass("has-value");
  $(".qblc").val(cblc);
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
  
    if(qbbs != "" && qbbo != "" && qbbc != "" && qblo != "" && qblc != "") {
    //Calculating Percentage

    var qbbcp = qbbc / 100;
    var qblcp = qblc / 100;

    //Calculating 
    //Lay Stake

    var qblsr = (qbbo - (qbbo - 1) * qbbcp) * (qbbs) / (qblo - qblcp);

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
    //Lay Stake Required and Standard Value

    $(".qbstandardvalfix").text(qblsr.toFixed(2));
    $(".qblsr").text(qblsr.toFixed(2));

    //Graph
    //Back

    $(".qbbb").text(qbbb.toFixed(2));
    $(".qbbe").text(qbbe.toFixed(2));
    $(".qbbt").text(qbbt.toFixed(2));

    //Lay

    $(".qblb").text(qblb.toFixed(2));
    $(".qble").text(qble.toFixed(2));
    $(".qblt").text(qblt.toFixed(2));  

    if(qbbo <= qblo) {
      //Underlay

      $(".qbulsr").text(qbulsr.toFixed(2));
      $(".qbutel").text(qbube.toFixed(2));
      $(".qbubw").text(qbubt.toFixed(2));
      $(".qbulw").text(qbult.toFixed(2));

      //Overlay

      $(".qbolsr").text(qbolsr.toFixed(2));
      $(".qbotel").text(qbobe.toFixed(2));
      $(".qbobw").text(qbobt.toFixed(2));
      $(".qbolw").text(qbolt.toFixed(2));

      //Range Slider

      var qbslidermid = (qbolsr - qblsr) + (35 / 100);
      var qbslidermin = qblsr - qbslidermid; 
      var qbslidermax = qblsr + qbslidermid; 

      $(".qbmin").val(qbslidermin.toFixed(2));
      $(".qbmax").val(qbslidermax.toFixed(2));

      document.getElementById("qbslider").min = qbslidermin;
      document.getElementById("qbslider").max = qbslidermax;
      document.getElementById("qbslider").value = qblsr;

    } else if(qbbo > qblo) {
        //Underlay

        $(".qbulsr").text(qbolsr.toFixed(2));
        $(".qbutel").text(qbobe.toFixed(2));
        $(".qbubw").text(qbobt.toFixed(2));
        $(".qbulw").text(qbolt.toFixed(2));

        //Overlay

        $(".qbolsr").text(qbulsr.toFixed(2));
        $(".qbotel").text(qbube.toFixed(2));
        $(".qbobw").text(qbubt.toFixed(2));
        $(".qbolw").text(qbult.toFixed(2));

        //Range Slider

        var qbslidermid = (qbulsr - qblsr) + (35 / 100);
        var qbslidermin = qblsr - qbslidermid; 
        var qbslidermax = qblsr + qbslidermid; 

        $(".qbmin").val(qbslidermin.toFixed(2));
        $(".qbmax").val(qbslidermax.toFixed(2));

        document.getElementById("qbslider").min = qbslidermin;
        document.getElementById("qbslider").max = qbslidermax;
        document.getElementById("qbslider").value = qblsr;
    }
  } else {
    document.getElementById("qblsr").innerHTML = parseFloat(0.00).toFixed(2);
  }
  
  if(cbbs != "" && cbcs != "" && cbbo != "" && cbbc != "" && cblo != "" && cblc != "" && !(cbbs < 0) && !(cbcs < 0) && !(cbbo <= 0) && !(cbbc < 0) && !(cblo <= 0) && !(cblc < 0)) {
    if(cbbs < 0) {
      $(".cbbs").text("0");
    }
    
    var cbcsval = cbcs;
    //Calculating Percentage

    var cbbcp = cbbc / 100;
    var cblcp = cblc / 100;

    //Calculating 
    //Lay Stake

    var cblsr = (cbbo - (cbbo - 1) * cbbcp - cbcs / cbbs) / (cblo - cblcp) * (cbbs);

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
    
    //Range Slider
    
    if((cblsr - cbulsr) > (cblsr - cbolsr)) {
      var cbslidermid = (cblsr - cbulsr) + (23 / 100);
      var cbslidermin = cblsr - cbslidermid; 
      var cbslidermax = cblsr + cbslidermid; 
    } else {
        var cbslidermid = (cbolsr - cblsr) - (23 / 100);
        var cbslidermin = cblsr - cbslidermid; 
        var cbslidermax = cblsr + cbslidermid; 
        if(cbslidermin > cbslidermax) {
          var tmp;
          tmp = cbslidermin;
          cbslidermin = cbslidermax;
          cbslidermax = tmp;
          $(".cbmin").val(cbslidermin.toFixed(2));
          $(".cbmax").val(cbslidermax.toFixed(2));
        }
    }
    
    //Conditions NaN && Infinity
    
    if(isNaN(cbslidermax)) {
      cbslidermax = 0;
    }
    if(isNaN(cbslidermin)) {
      cbslidermin = 0;
    }
    if(isNaN(cbbt)) {
      cbbt = 0;
    }
    if(isNaN(cblt)) {
      cblt = 0;
    }
    if(isNaN(cbbe)) {
      cbbe = 0;
    }
    if(isNaN(cble)) {
      cble = 0;
    }
    if(isNaN(cblsr)) {
      cblsr = 0;
    }
    
    if(cblsr === Infinity || cblsr === -Infinity) {
      cblsr = 0;
    }
    if(cbslidermin === Infinity || cbslidermin === -Infinity) {
      cbslidermin = 0;
    }
    if(cbslidermax === Infinity || cbslidermax === -Infinity) {
      cbslidermax = 0;
    }
    if(cbbt === Infinity || cbbt === -Infinity) {
      cbbt = 0;
    }
    if(cblt === Infinity || cblt === -Infinity) {
      cblt = 0;
    }
    if(cbbe === Infinity || cbbe === -Infinity) {
      cbbe = 0;
    }
    if(cble === Infinity || cble === -Infinity) {
      cble = 0;
    }
    
    //Displaying
    //Lay Stake Required and Standard Value

    $(".cbstandardvalfix").text(cblsr.toFixed(2));
    $(".cblsr").text(cblsr.toFixed(2));

    //Graph
    //Back

    $(".cbbb").text(cbbb.toFixed(2));
    $(".cbbe").text(cbbe.toFixed(2));
    $(".cbbcs").text(cbbcs.toFixed(2));
    $(".cbbt").text(cbbt.toFixed(2));

    //Lay

    $(".cblb").text(cblb.toFixed(2));
    $(".cble").text(cble.toFixed(2));
    $(".cblcs").text(cblcs.toFixed(2));
    $(".cblt").text(cblt.toFixed(2));  

    //Underlay

    $(".cbulsr").text(cbulsr.toFixed(2));
    $(".cbutel").text(cbube.toFixed(2));
    $(".cbubw").text(cbubt.toFixed(2));
    $(".cbulw").text(cbult.toFixed(2));

    //Overlay

    $(".cbolsr").text(cbolsr.toFixed(2));
    $(".cbotel").text(cbobe.toFixed(2));
    $(".cbobw").text(cbobt.toFixed(2));
    $(".cbolw").text(cbolt.toFixed(2));

    $(".cbmin").val(cbslidermin.toFixed(2));
    $(".cbmax").val(cbslidermax.toFixed(2));
    
    document.getElementById("cbslider").min = cbslidermin;
    document.getElementById("cbslider").max = cbslidermax;
    document.getElementById("cbslider").value = cblsr;
  } else {
      var zero = 0;
      document.getElementById("cblsr").innerHTML = parseFloat(zero).toFixed(2);   $(".cbstandardvalfix").text(zero.toFixed(2));
      $(".cblsr").text(zero.toFixed(2));

      //Graph
      //Back

      $(".cbbb").text(zero.toFixed(2));
      $(".cbbe").text(zero.toFixed(2));
      $(".cbbcs").text(zero.toFixed(2));
      $(".cbbt").text(zero.toFixed(2));

      //Lay

      $(".cblb").text(zero.toFixed(2));
      $(".cble").text(zero.toFixed(2));
      $(".cblcs").text(zero.toFixed(2));
      $(".cblt").text(zero.toFixed(2));  

      //Underlay

      $(".cbulsr").text(zero.toFixed(2));
      $(".cbutel").text(zero.toFixed(2));
      $(".cbubw").text(zero.toFixed(2));
      $(".cbulw").text(zero.toFixed(2));

      //Overlay

      $(".cbolsr").text(zero.toFixed(2));
      $(".cbotel").text(zero.toFixed(2));
      $(".cbobw").text(zero.toFixed(2));
      $(".cbolw").text(zero.toFixed(2));

      $(".cbmin").val(zero.toFixed(2));
      $(".cbmax").val(zero.toFixed(2));
    } 
  
});