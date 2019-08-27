function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  function findOrbPeriod(avgAlt) {
    var orbPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow((earthRadius+avgAlt),3)/GM));
    return orbPeriod;
  }

  var newArr = [];
  newArr = arr.map(function(item) {
    //obj["orbitalPeriod"] = 2*Math.PI*Math.sqrt(Math.pow((earthRadius+obj["avgAlt"]),3)/GM);
    return {"name": item["name"], "orbitalPeriod": findOrbPeriod(item.avgAlt)};
  });
  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
