function myReplace(str, before, after) {
  var words = str.split(" ");
  if(before[0] == before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  for(var i=0; i<words.length; i++) {
    if(words[i] == before) {
      words[i] = after;
    }
  }
  str = words.join(" ");
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
