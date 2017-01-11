function isUniform(arr) {
  var firstElement = arr[0];
  for(var i=0; i<arr.length; i++){
    if(arr[i] !== firstElement) return false;
  }
  return true;
}
