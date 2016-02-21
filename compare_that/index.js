function compareNumbers() {
  //get the values of input #a and input #b
  var a = parseFloat($("#a").val());
  var b = parseFloat($("#b").val());

if(a && b){

  var comparison = $("#comparison");
  console.log(a,b);

  if (a > b) {
    //if a is greater than b
    comparison.html('>');
  } else if (a < b) {
    //if a is lesser than b
    comparison.html('<');
  } else if (a === b) {
    //if a is equal to b
    comparison.html('===');
  } else {
    comparison.html('NaN');
  }
}else{
  alert("enter number")
}
}
$("#submit").click(compareNumbers);
