function qbOverlay() {
  var qbbs = $('input[name=qbbs]').val()-0;
  var qbbo = $('input[name=qbbo]').val()-0;
  var qbbc = $('input[name=qbbc]').val()-0;
  var qblo = $('input[name=qblo]').val()-0;
  var qblc = $('input[name=qblc]').val()-0;
  
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


    if(qbbt < 0) {    

      $(".qblsr").text(qbolsr.toFixed(2));
      //Graph   
      //Back   
      $(".qbbb").text(qbobb.toFixed(2));
      $(".qbbe").text(qbobe.toFixed(2));
      $(".qbbt").text(qbobt.toFixed(2));

      //Lay

      $(".qblb").text(qbolb.toFixed(2));
      $(".qble").text(qbole.toFixed(2));
      $(".qblt").text(qbolt.toFixed(2));
      document.getElementById("qbslider").value = qbolsr;
    } else {
        $(".qblsr").text(qbulsr.toFixed(2));
        //Graph   
        //Back   
        $(".qbbb").text(qbubb.toFixed(2));
        $(".qbbe").text(qbube.toFixed(2));
        $(".qbbt").text(qbubt.toFixed(2));

        //Lay

        $(".qblb").text(qbulb.toFixed(2));
        $(".qble").text(qbule.toFixed(2));
        $(".qblt").text(qbult.toFixed(2));  
        document.getElementById("qbslider").value = qbulsr;
    }

    //Range Slider

    //var qbslidermid = (qbulsr - qblsr) + (35 / 100);
    //var qbslidermin = qblsr - qbslidermid; 
    //var qbslidermax = qblsr + qbslidermid; 

    if((qblsr - qbulsr) > (qblsr - qbolsr)) {
      var qbslidermid = (qblsr - qbulsr) + (23 / 100);
      var qbslidermin = qblsr - qbslidermid; 
      var qbslidermax = qblsr + qbslidermid;  $(".qbmin").val(qbslidermin.toFixed(2));
      $(".qbmax").val(qbslidermax.toFixed(2));
    } else {
      var qbslidermid = (qbolsr - qblsr) - (23 / 100);
    var qbslidermin = qblsr - qbslidermid; 
    var qbslidermax = qblsr + qbslidermid; 
    if(qbslidermin > qbslidermax) {
      var tmp;
      tmp = qbslidermin;
      qbslidermin = qbslidermax;
      qbslidermax = tmp;
      $(".qbmin").val(qbslidermin.toFixed(2));
      $(".qbmax").val(qbslidermax.toFixed(2));
    } else {
       $(".qbmin").val(qbslidermin.toFixed(2));
      $(".qbmax").val(qbslidermax.toFixed(2));
    }
    }

    document.getElementById("qbslider").min = qbslidermin;
    document.getElementById("qbslider").max = qbslidermax;
}