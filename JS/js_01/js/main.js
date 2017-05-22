// Завдання 1
(function() {
  'use strict';

while (true) {
  var num = +prompt('Введите число','');
  var n = +prompt('Возвести в степень','');
  if ( !isNaN(num) && !isNaN(n)){
    alert (pow(num, n));
    break;
  }else {
    alert('Введён не числовой тип данных');
  }
}

function pow (num, n) {
  var result = num;
  if (n === 0) {
    result = 1;
    return result;
  } else if (n < 0) {
    for (var i = 1; i < n; i++) {
    result *= num;
  }
    result = 1 / result;
    return result;
  } else {
    for (var j = 1; j < n; j++) {
    result *= num;
  }
  return result;
  }
}
})();



// Завдання 2

(function() {
  'use strict';
  var users = [];
  for (var i = 0; i < 5; i++) {
    users[i] = prompt ('Введите имена пользователей:', '');
  }

  users.forEach(function (element, index, users) {
    users[index] = element.toUpperCase();
  });
  console.log(users);

  var admin = prompt ('Введите ваше имя:', '');
  var upperAdmin = admin.toUpperCase();
  console.log(upperAdmin);

  for (var j = 0; j < users.length; j++) {
    if (users[j] === upperAdmin) {
      var result = upperAdmin;
    }
    
  }

  if (result) {
    alert (upperAdmin + ', Вы успешно вошли');
  } else {
    alert ('Ошибка. Введено не верное имя пользователя');
  }

})();
