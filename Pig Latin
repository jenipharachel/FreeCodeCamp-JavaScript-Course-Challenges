function translatePigLatin(str) {
  
  if(str[0].match(/[aeiou]/)) {
    strRes = str + "way";
  } 
  else if(str.search(/[aeiou]/) > 0){
   var pos = str.search(/[aeiou]/);
   var strRes = str.slice(pos);
   for(var i=0; i<pos; i++) {
     strRes = strRes + str[i];
   }
   strRes = strRes + "ay";
  } 
  else  {
    strRes = str + "ay";
  }
   
  return strRes;
}

translatePigLatin("consonant");
