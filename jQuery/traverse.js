var h1 = $('h1');
h1.text('hello Jimmy Easter');

var arr = ['apple', 'banana', 'watermelon', 'orange', 'peach'];


var ul = $('ul');
var i = 0;
ul.children().each(function(){
  $(this).text(arr[i]);
  i++;
});
