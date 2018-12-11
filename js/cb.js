$('input[name=cbbs], input[name=cbcs], input[name=cbbo], input[name=cbbc], input[name=cblo], input[name=cblc]').keyup(function() {
  var cbbs = $.trim( $('input[name=cbbs]').val() );
  var cbcs = $.trim( $('input[name=cbcs]').val() );
  var cbbo = $.trim( $('input[name=cbbo]').val() );
  var cbbc = $.trim( $('input[name=cbbc]').val() );
  var cblo = $.trim( $('input[name=cblo]').val() );
  var cblc = $.trim( $('input[name=cblc]').val() );
  
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