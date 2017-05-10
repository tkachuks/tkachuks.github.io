'use strict'
function pow (num, n) {
  'use strict'
  var result = num;
  for (var i = 1; i < n; i++) {
  result *= num;
  }
  return result;
}

  var num = prompt('Введите число','');
  var n = prompt('Возвести в степень','');

  if (n === 0) {
    result = 1;
  } else if (n < 0) {
    alert ('Степень не может принимать отрицательные значения');
    result = null;
  } else {
    alert (pow (num, n));
  }
