$(document).ready(function () {

  // Register event
  $('#register-btn').on('click', function(event) {
    event.preventDefault();

    const newUser = {
      username: $('#email-register').val().trim(),
      password: $('#password-register').val().trim(),
      first_name: $('#first-name').val().trim(),
      last_name: $('#last-name').val().trim()
    }

    // Password validation
    const checkPass = newUser.password
    const password2 = $("#password-confirm").val().trim();

    const errorMsg = [];

    if (checkPass != password2) {
      errorMsg.push(`<li>Passwords do not match.</li>`);
    };

    if (checkPass.length < 8) {
      errorMsg.push(`<li>Password needs to be at least 8 characters.</li>`);
    };

    const lowerCaseLetters = /[a-z]/g;
    if (!lowerCaseLetters.test(checkPass)) {
      errorMsg.push(`<li>Password must contain at least one lowercase letter.</li>`);
    };

    const upperCaseLetters = /[A-Z]/g;
    if (!upperCaseLetters.test(checkPass)) {
      errorMsg.push(`<li>Password must contain at least one uppercase letter.</li>`);
    };

    const numbers = /[0-9]/g;
    if (!numbers.test(checkPass)) {
      errorMsg.push(`<li>Password must contain at least one number.</li>`);
    };

    if (errorMsg.length > 0) {
      const errString = errorMsg.join("\n")
      $("#password-register").popover({ 'html': true });
      $("#password-register").attr("data-content", errString);
      $('[data-toggle=popover2]').popover('show');
      return false;

    } else {

      $.ajax({
        method: "POST",
        url: "/api/user/register",
        data: newUser
      }).then(function (redirect) {
        location.replace(redirect);
      })
    }

  });

  // Login event
  $('#login-btn').on('click', function () {

    loginInfo = {
      username: $('#email-login').val().trim(),
      password: $('#password-login').val().trim()
    }

    $.ajax({
      method: "POST",
      url: "/api/user/login",
      data: loginInfo
    }).then(function (redirect) {
      location.replace(redirect)
    })
  })

});