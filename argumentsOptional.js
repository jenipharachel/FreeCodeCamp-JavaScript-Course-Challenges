function addTogether(arg1,arg2) {
  if(typeof arg1 == "number" && arg2 == null)
   return function(arg2){
    if(typeof arg1 == "number" && typeof arg2 == "number")
     return arg1+arg2; 
    else
     return undefined;
   }
  else {
    if(typeof arg1 == "number" && typeof arg2 == "number")
     return arg1+arg2; 
    else
     return undefined;
  }

}

addTogether(2,3);

