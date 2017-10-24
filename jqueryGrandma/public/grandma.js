var listenToGrandmaForm = function(e) {
  e.preventDefault();
  var say = $(grandmaForm.say).val();
  var $messageDiv = $('<div>');
  $messageDiv.text(say);
  $messageDiv.attr('id', 'messageDiv');

  $('#conversation').append($messageDiv);

  var response = grandmaResponse(say);
  var grandmaSay = $('<div>');
  grandmaSay.text(response);
  $('#conversation').append(grandmaSay);

}

var grandmaResponse = function(say) {
  var response = "grandma";
  if (say.toUpperCase() === say) {
    if (say === 'GOODBYE!') {
      response = 'L8R M8';
      // $(grandmaForm.submit).off();
    }
    else {
      response = "UR A n00b HACKZOR!";
    }
  }
    else {
      response = 'U WAT M8?';
    }
    return response;
  }



var $form = $('<form>');
$form.attr('id', 'grandmaForm')

var $say = $('<input>'); //create input
$say.attr('name', 'say');
$form.append($say);

var $submit = $('<input>'); //create submit button
$submit.attr('name', 'submit');
$submit.attr('id', 'submit');
$submit.attr('type', 'submit');
$submit.attr('value', 'Submit');

var $div = $('<div>');
$div.attr('id', 'conversation');
$('body').append($div);

$submit.click(listenToGrandmaForm);
$form.append($submit);
$('body').append($form, $div);
