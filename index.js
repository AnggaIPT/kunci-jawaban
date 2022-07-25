function calculate() {
  var number = document.getElementById('inputnumber').value
  var result = new Array
  if (number == '') {
    alert('Nomer kosong!')
  } else {
      for (let index = 0; index < parseInt(number); index++) {
        var num = index + 1
        if (num%3 == 0 && num%5 == 0) {
          result.push("Mantul")
        } else if(num%5 ==0) {
          result.push("Tul")
        } else if(num%3 ==0) {
          result.push("Man")
        } else {
          result.push(num)
        }
      }
      document.getElementById("result").innerHTML = result.join(', ');
  }
}