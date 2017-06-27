(function() {
  'use strict';
  var data = {users: [
      {
        img: 'img/user-pic-1.jpg',
        name: 'John Wayne',
        tel: '+356943266',
        email: 'johnwayne@mail',
        date: '11.06.2008'
      },
      {
        img: 'img/user-pic-2.jpg',
        name: 'Lucy Li',
        tel: '+3523452346',
        email: 'lucyli@mail',
        date: '12.07.2014'
      }
    ]}
    ;

  var source = $('#userCard').html();
  var template = Handlebars.compile(source);
  $('#user').html(template(data));
})();
