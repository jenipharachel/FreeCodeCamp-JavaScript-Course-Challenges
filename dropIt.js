function dropElements(arr, func) {
  // Drop them elements.
  
  for(var i=0; i<arr.length; i) {
    if(func(arr[i]) == false) {
      arr.shift();
      
    }
  }
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3; });
