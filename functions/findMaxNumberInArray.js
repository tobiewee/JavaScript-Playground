// assuming array is all Numbers
function max(arr){
  var max = 0;
  arr.forEach(function(num){
    if(num > max) max = num;
  });
  return max;
}
