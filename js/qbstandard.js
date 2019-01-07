function qbStandard() {
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
    if(qbbt < 0) {
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
    } else {


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
    document.getElementById("qbslider").value = qblsr;
}