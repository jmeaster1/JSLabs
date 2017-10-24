$(document).ready(function() {
  console.log('page loaded');

  var myReq = $.ajax({
  type: "GET",
  url: "http://52.25.225.137:8080/pokemon/data/poke?sorted=true",
  dataType: "json"
});

myReq.done(function( data, status ) {
  buildDOM(data);
});

function buildDOM(data){
  data.forEach(function(data){
    var $h1 = $('<h1>');
    $h1.text(data.fname + " " +data.lname );
    $("body").append($h1);
  });
}


myReq.fail(function(xhr, status, error) {
  console.log('ERROR! Something went wrong!');
});

});
