$('#submit').click(function(e) { //prints first name to console on click
  e.preventDefault();

  var fname = $(contact.fname).val();
  var lname = $(contact.lname).val();
  var street = $(contact.street).val();
  var city = $(contact.city).val();
  var state = $(contact.state).val();
  var zip = $(contact.zip).val();

  console.log($(contact.fname).val() + " " + $(contact.lname).val() + " " + $(contact.street).val() + " " + $(contact.city).val() + " " + $(contact.state).val() + " " + $(contact.zip).val());

  verifyFormData(fname, lname, street, city, state, zip);
  contact.reset();
});

var verifyFormData = function(fname, lname, street, city, state, zip) {
  var errors = [];
  console.log("here");
  if (fname == "" || lname == "" || street == "" || city == "" || state == "" || zip == "") {
    errors.push("Fields cannot be empty!");
  }
  if (zip.length == 5 && !isNaN(parseInt(zip)) && state.length == 2) {
    errors = true;
  } else {
    if (zip.length != 5 || isNaN(Number(zip))) {
      errors.push("This is not an acceptable ZIP CODE");
    }
    if (state.length != 2) {
      errors.push("This is not an acceptable STATE");
    }
  }
  alert(errors);
  return errors;

};
