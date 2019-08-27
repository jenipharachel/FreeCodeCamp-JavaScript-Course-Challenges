function sumAll(arr) {
  var sum = 0;
  if(arr[0] < arr[1]) {
    for(var i=arr[0]; i<=arr[1]; i++) {
      sum = sum + i;
    }
  }
  if(arr[0] > arr[1]) {
    for(var i=arr[1]; i<=arr[0]; i++) {
      sum = sum + i;
    }
  }
  return sum;
}

sumAll([1, 4]);
