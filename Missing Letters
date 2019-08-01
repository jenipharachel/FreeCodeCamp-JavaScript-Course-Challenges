function fearNotLetter(str) {
  var arr = str.split("");
  
  var alphabet = Array.from(Array(26), (e, i) => String.fromCharCode(i + 97)); 
  var testArr = alphabet.slice(alphabet.indexOf(arr[0]),alphabet.indexOf(arr.length - 1));   
  for(var i=0; i<testArr.length; i++) {
    if(testArr[i] != arr[i]) {
      return testArr[i];
    }
  }
}

fearNotLetter("stvwx"); 
