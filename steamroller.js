function steamrollArray(arr) {
  // I'm a steamroller, baby
  var newArr = arr.flat(3);
  
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
