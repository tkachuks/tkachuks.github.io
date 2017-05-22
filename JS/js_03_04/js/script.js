(function() {
  'use strict';

  var root = document.getElementById('root');
  console.log(root);
  var form = document.createElement('form');
  form.classList.add('form');
  root.appendChild(form);

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
  listData: function () {
    for (var i = 0, max = this.data.questions.length; i < max; i++) {
      console.log(this.data.questions[i]);
    }
  },
  crateQuestion: function () {
    for (var i = 0, max = this.data.questions.length; i < max; i++) {
      var question = document.createElement('h4');
      question.appendChild(document.createTextNode(this.data.questions[i].title));
      form.appendChild(question);
    }
  },
  createLabel: function () {
      for (var i = 0; i < this.data.questions[0].answers.length; i++) {
        var label = document.createElement('label');
        var check = document.createElement('input');
        check.setAttribute('type', 'checkbox');
        label.appendChild(check);
        label.appendChild(document.createTextNode(this.data.questions[0].answers[i]));
        form.insertBefore(label, form.children[1]);
      }
  },
  createLabel1: function () {
      for (var i = 0; i < this.data.questions[1].answers.length; i++) {
        var label = document.createElement('label');
        var check = document.createElement('input');
        check.setAttribute('type', 'checkbox');
        label.appendChild(check);
        label.appendChild(document.createTextNode(this.data.questions[1].answers[i]));
        form.insertBefore(label, form.children[5]);
      }
  },
  createLabel2: function () {
      for (var i = 0; i < this.data.questions[2].answers.length; i++) {
        var label = document.createElement('label');
        var check = document.createElement('input');
        check.setAttribute('type', 'checkbox');
        label.appendChild(check);
        label.appendChild(document.createTextNode(this.data.questions[2].answers[i]));
        form.insertBefore(label, form.children[10]);
      }
  }

};

test.listData();
test.crateQuestion();
console.log(root);
test.createLabel();
console.log(root);
test.createLabel1();
test.createLabel2();



})();
