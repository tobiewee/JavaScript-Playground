function factorial(num) {
  var answer = 1
  while(num > 0){
    answer *= num
    num--
  }
	return answer;
}
