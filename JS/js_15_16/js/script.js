(function() {
  'use strict';
// API
  var wrapper = document.getElementById('wrap');
  console.log(wrapper);
  var template = document.getElementById('tmpl').textContent;
  console.log(template);

  function getImg () {
    console.log('function start');
    var searchValue = document.querySelector('.search_input').value;
    console.log('searchValue:', searchValue);
    var apiUrl = 'https://pixabay.com/api/?key=5923549-f1dfce65cc39ea7f2e6ae5320&q='+encodeURIComponent(searchValue)+'&per_page=9';

    fetch(apiUrl)
      .then(function(response){
        if (response.ok){
          return response.json();
        }
        throw new Error('ERROR fetching data!');
      })
      .then(function(data){
        console.log(data.hits);
        var templateAPI = Handlebars.compile(template);
        wrapper.innerHTML = templateAPI(data);
      })
      .catch(function(error){
        console.log('Error', error);
      });

    }

    document.querySelector('.search_btn').addEventListener('click', getImg);
    document.querySelector('.search_input').addEventListener('keypress', function(event){
       if(event.keyCode === 13){
         getImg();
       }
     });

})();
