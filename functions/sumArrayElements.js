// assuming array is all Numbers
function sumArray(arr) {
  var result = 0;
  arr.forEach(function(element){
    result+=element;
  });
  return result;
}
