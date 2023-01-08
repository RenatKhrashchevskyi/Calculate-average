function find_average(array) {
  if (array.length === 0) {
  return 0;
  }
  var result = 0;
  for (i=0; i<array.length; i++) {
    result +=array[i];
  }
  return result/array.length;
}

const findAverage = (arr) => {
  return (!arr.length) ? 0 : arr.reduce((acc, i) => acc + i, 0)/arr.length
}