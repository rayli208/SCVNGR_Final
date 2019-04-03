$(document).ready(function () {

  // Register event
  $('#register-btn').on('click', function (event) {
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
      errorMsg.push('Passwords do not match.');
    };

    if (checkPass.length < 8) {
      errorMsg.push('Password needs to be at least 8 characters.');
    };

    const lowerCaseLetters = /[a-z]/g;
    if (!lowerCaseLetters.test(checkPass)) {
      errorMsg.push('Password must contain at least one lowercase letter.');
    };

    const upperCaseLetters = /[A-Z]/g;
    if (!upperCaseLetters.test(checkPass)) {
      errorMsg.push('Password must contain at least one uppercase letter.');
    };

    const numbers = /[0-9]/g;
    if (!numbers.test(checkPass)) {
      errorMsg.push('Password must contain at least one number.');
    };

    if (errorMsg.length > 0) {
      for (let i = 0; i < errorMsg.length; i++) {
        let alertError = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <p>${errorMsg[i]}</p>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`

        $('#alertErrors').append(alertError);
      };



      // const errString = errorMsg.join("\n")
      // $("#password-register").popover({ 'html': true });
      // $("#password-register").attr("data-content", errString);
      // $('[data-toggle=popover2]').popover('show');
      return false;

      // <div class="alert alert-warning" role="alert">
      //  <p></p>
      // </div>

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