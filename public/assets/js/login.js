$(document).ready(function() {

  // Register event
  $('#register-btn').on('click', function() { 

    const newUser = {
      username: $('#email-register').val().trim(),
      password: $('#password-register').val().trim(),
      first_name: $('#first-name').val().trim(),
      last_name: $('#last-name').val().trim()
    }

    $.ajax({
      method: "POST",
      url: "/api/user/register",
      data: newUser
    }).then(function(redirect) {
      location.replace(redirect);
    })
  
});

  // Login event
  $('#login-btn').on('click', function() { 

    loginInfo = {
      username: $('#email-login').val().trim(),
      password: $('#password-login').val().trim()
    }

    $.ajax({
      method: "POST",
      url: "/api/user/login",
      data: loginInfo
    }).then(function(redirect) {
      location.replace(redirect)
    })
  })

});