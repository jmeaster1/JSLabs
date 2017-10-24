// $(document).ready(function() {
//   console.log("Page Loaded Successfully");
// });
//
// $('#button1').click(function(e) {
//   alert('A button has been clicked!');
// });
//
// $('#button2').click(function(e) {
//   if($('#button2').text() == 'ON'){
//       $('#button2').text('OFF');
//   }
//   else{
//     $('#button2').text('ON');
//   }
// });

$(login.submit).click(function(e) {
            // Don't submit the form. Doesn't refresh the page.
            e.preventDefault();

            var user = {};
            user.fName = $(login.fName).val();
            user.lName = $(login.lName).val();
            user.username = $(login.username).val();
            user.password = $(login.password).val();

            console.log(user);

            // print out the submit buttons => parent (form) => fname input => value
            // console.log($(login.username).val()); // Will print the user input value
            // console.log($(login.password).val()); // Will print the user input value
            login.reset();
        });


// console.log($(login.username).val());
// console.log($(login.password).val());
