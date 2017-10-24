$(document).ready(function() {
      console.log('page loaded');


      $('#myButton').click(function() {
          var myReq = $.ajax({
            type: "GET",
            url: "http://kkane106.github.io/mlb.json",
            dataType: "json"
          });

          myReq.done(function(data, status) {
            buildDOM(data);
          });



          myReq.fail(function(xhr, status, error) {
            console.log('ERROR! Something went wrong!');
          });


          function buildDOM(data) {
            var $ul = $('<ul>');
            $("body").append($ul);
            data.forEach(function(team) {

              var $li = $('<li>');

              $ul.append($li);

              var $a = $('<a>');
              $a.text(team.name);
              $a.attr("href", team.url);
              $li.append($a);
            });

          };
          $(this).hide();
      });
    });
