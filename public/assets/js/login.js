$(document).ready(function() {

  $('#register-user').on('click', registerUser());

  // Register user function
  const registerUser = () => {
    newUser = {
      username = $('#email-register').val().trim(),
      password = $('#password-register').val().trim(),
      first_name = $('#first-name').val().trim(),
      last_name = $('#last-name').val().trim()
    }

    $.ajax({
      method: "POST",
      url: "/api/user/register",
      data: newUser
    }).then(function(dashboard) {
      location.reload(dashboard);
    })
  }

  $.ajax({
    method: "POST",
    url: "/api/user/login",
    data: loginInfo
  }).then(function() {

  })


  // Login request
  $.ajax({
    method: "POST",
    url: "/api/user/login",
    data: loginInfo
  }).then(function() {

  })

});