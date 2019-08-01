function sumFibs(num) {
  var a = 0;
  var b = 1;
  var temp = 0;
  var arr = [];
  for(var i=1; b <= num; ++i) {
    if(b%2 != 0)
    arr.push(b);
    temp = a+b;
    a=b;
    b=temp;
    
  }
  var sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
  return sum;
}

sumFibs(4);
