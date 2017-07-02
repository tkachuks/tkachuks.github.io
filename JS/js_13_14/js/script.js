(function() {
  'use strict';

  var data = {
    title: 'Тест по астрономии',
    questions: [
      {
        title: 'Ближайшая к Земле звезда – это:',
        answers: ['Венера, в древности называемая «утренней звездой»', 'Солнце', 'Альфа Центавра'],
        correctAnswers: [2]
      },
      {
        title: 'Из каких двух газов, в основном, состоит Солнце?',
        answers: ['кислород', 'гелий', 'азот', 'аргон', 'водород'],
        correctAnswers: [2, 5]
      },
      {
        title: 'Какие лучи не воспринимает человеческий глаз? (выбрать два ответа)',
        answers: ['белый свет', 'красный цвет', 'фиолетовый цвет', 'инфракрасное излучение', 'ультрафиолетовое излучение'],
        correctAnswers: [4, 5]
      }
    ]
  };

  var dataJS, source, template, modal, btn, span, output,
      checkboxes, result, correctAnswers, answers;
      
  localStorage.setItem('bd', JSON.stringify(data));
  dataJS = localStorage.getItem('bd');
  dataJS = JSON.parse(dataJS);

  source = $('#template').html();
  template = Handlebars.compile(source);
  $('#root').prepend(template(dataJS));


    //modal window
  modal = document.getElementById('myModal');
  btn = document.getElementById('myBtn');
  span = document.querySelector('.close');
  output = document.querySelector('.modal-answer');
  function show () {
    modal.style.display = 'block';
  }
  function close () {
    modal.style.display = 'none';
  }
  span.addEventListener('click', close);
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  checkboxes = document.querySelectorAll('input[type="checkbox"]');

  correctAnswers = [];

  _.forEach(dataJS.questions, function (itemQuestions) {
    _.forEach(itemQuestions.answers, function (itemAnswers, indexAnswers) {
      result = false;
      _.forEach(itemQuestions.correctAnswers, function (itemCorrectAnswers) {
        if (indexAnswers + 1 === itemCorrectAnswers) {
          result = true;
        }
      });
      if (result === true) {
        correctAnswers.push(true);
      } else {
        correctAnswers.push(false);
      }
    });
   });

   function getAnswers(arr) {
   	return _.map(arr, function(item) {
   		return item.checked;
   	});
  }

  btn.addEventListener('click', function () {
    show();
    answers = getAnswers(checkboxes);

    if (_.isEqual(correctAnswers, answers)) {
          output.innerHTML = 'Тест пройден успешно!';
          output.style.color='green';

        } else {
          output.innerHTML = 'Где-то ошибка, попробуйте снова';
          output.style.color='red';
        }
  });

})();
