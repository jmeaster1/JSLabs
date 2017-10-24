$('#newFormButton').click(function() {
  var $form = $('<form>');
  $form.attr('name', 'myForm')// form created & name set to 'MyForm'
  $(this).remove();

  var $fname = $('<input><br>');//create input
  $fname.attr('name','fname');
  $fname.attr('placeholder','First Name');
  $form.append($fname);//input appended to form

  var $lname = $('<input><br>');//create input
  $lname.attr('name','lname');
  $lname.attr('placeholder','Last Name');
  $form.append($lname);//input appended to form

  var $submit = $('<input>');//create submit button
  $submit.attr('name','submit');
	$submit.attr('type','submit');
	$submit.attr('value','Post Name');

  $submit.click(function(e){//prints first name to console on click
    e.preventDefault();
    console.log($(myForm.fname).val() + " " + $(myForm.lname).val());
    myForm.reset();
  });


  $form.append($submit);// submit button added to form

  $('body').append($form);//form added to body
});



var $h1 = $('<h1>');
$h1.text('Hello World');
$('body').append($h1);

var movies= [
  'Se7en',
  'The Usual Suspects',
  'Primal Fear',
  'Book of Eli',
  'Rounders'
];

var $ul = $('<ul>');

movies.forEach(function(val, idx, arr){
  var $li = $('<li>');
  $li.text(val);
  $ul.append($li);
})

$('body').append($ul);
