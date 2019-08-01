function convertHTML(str) {
  
  var words = str.split("");

  for(var i=0; i<words.length; i++) {
    switch(words[i]) {
      case '&':
      words[i] = "&amp;";
      break;
      case '<':
      words[i] = "&lt;";
      break;
      case '>':
      words[i] = "&gt;";
      break;
      case '"':
      words[i] = "&quot;";
      break;
      case "'":
      words[i] = "&apos;";
      break;
    }
  }
  var newStr = words.join("");
  return newStr;
}

convertHTML("Dolce & Gabbana");
