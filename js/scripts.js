function isBinary(string){
  if(string !== ""){
    for(i=0; i<string.length; i++){
      if (string[i]!=="0" && string[i]!=="1") {
        return false;
      }
    }
    return true;
  }
  else {
    return false;
  }
}
function removeZeros(string){
  var counter =0;
  while(string[counter]==="0"){
    counter ++;
  }
  if(string.length===counter){
    return 0;
  }
  else {
    return string.substring(counter);
  }
}
function binaryToDecimal(string){
  if (isBinary(string)) {
    string = removeZeros(string);
    var decimal = 0;
    if(string.length =="1"){
      return string;
    }
    else {
      var counter =(parseInt(string.length)-1);
      for(i=0; i<string.length; i++){
        if(string[counter-i]==="1"){
          decimal += Math.pow(2, i);
        }
      }
      return decimal;
    }
  }
  else {
    return "Enter a valid binary number";
  }
}
function hexadecimalToDecimal(string){
  dictionary = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

}

$(function(){
  $("#binaryForm").submit(function(event){
    event.preventDefault();
    $("#binaryToDecimal").text(binaryToDecimal($("#enterBinary").val()));
  })
})
