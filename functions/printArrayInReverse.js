function printReverse(array) {
  var arrCopy = array.slice();
  while(arrCopy.length>0){
    console.log(arrCopy.pop());
  }
}
