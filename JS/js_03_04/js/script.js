(function() {
  'use strict';

var test = {
  data: {
    title: 'Тест по какой-то теме',
    questions: [
      {
        title: 'Вопрос #1',
        answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3']
      },
      {
        title: 'Вопрос #2',
        answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3', 'Вариант овтета 4']
      },
      {
        title: 'Вопрос #3',
        answers: ['Вариант овтета 1', 'Вариант овтета 2']
      }
    ]
  },
  formCreate: function () {
    var root = document.getElementById('root');
    var form = document.createElement('form');
    form.classList.add('form');
    root.appendChild(form);
    return;
  },

  listData: function () {
    for (var i = 0, max = this.data.questions.length; i < max; i++) {
      console.log(this.data.questions[i]);
    }
  },

  createQuestions: function (obj) {
    var div = document.createElement('div');
    var question = document.createElement('h4');
    question.appendChild(document.createTextNode(obj.title));
    div.appendChild(question);

    for (var i = 0, max = obj.answers.length; i < max; i++) {
      var label = document.createElement('label');
      var check = document.createElement('input');
      check.setAttribute('type', 'checkbox');
      label.appendChild(check);
      label.appendChild(document.createTextNode(obj.answers[i]));
      div.appendChild(label);
    }
    // var form = document.querySelector('.form');
    // form.appendChild(div);
    return;
  },
  createTest: function () {
    for(var i = 0; i < this.data.questions.length; i++) {
	  var questions = this.createQuestions(this.data.questions[i]);
    var form = document.querySelector('.form');
    form.appendChild(questions);
   }
     return;
  }

};

test.formCreate();
test.listData();
// test.createQuestions(test.data.questions[0]);
test.createTest();




})();
