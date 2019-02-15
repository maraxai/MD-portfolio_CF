(function() {
  var $form = document.querySelector('#contact-form');
  var $emailInput = document.querySelector('#contact-email');
  var $phoneInput = document.querySelector('#contact-phone');
  var $messageInput = document.querySelector('#contact-msg');

  function validateEmail() {
    var value = $emailInput.value;

    if (!value) {
      showErrorMessage($emailInput, 'Correo electrónico es un campo obligatorio.');
      return false;
    }

    if((value.indexOf('@') < 1) || (value.indexOf('.') < 3)) {
      showErrorMessage($emailInput, 'Escriba una dirección de correo electrónico válida.');
      return false;
    }

    showErrorMessage($emailInput, null);
    return true;
  }

  function validatePhone() {
    var value = $phoneInput.value;

    if (isNaN(value) || value.length < 8) {
      showErrorMessage($phoneInput, 'Your phone number can only contain numbers and must have at least 8 digits.');
      return false;
    }

    if (!value) {
      showErrorMessage($phoneInput, 'Please enter a valid phone number.');
      return false;
    }

    showErrorMessage($phoneInput, null);
    return true;
  }

  function validateMessage() {
    var value = $messageInput.value;

    if (value == 'undefined') {
      showErrorMessage($messageInput, 'Please enter your message!');
      return false;
    }

    showErrorMessage($messageInput, null);
    return true;
  }

  function validateForm() {
    var isValidEmail = validateEmail();
    var isValidPhone = validatePhone();
    var isValidMessage = validateMessage();
    return isValidEmail && isValidPhone && isValidMessage;
  }

  $emailInput.addEventListener('input', validateEmail);
  $phoneInput.addEventListener('input', validatePhone);
  $messageInput.addEventListener('input', validateMessage);



  function showErrorMessage($input, message) {
    var $container = document.querySelector('input'); // input fields
    // remove an error
    var error = $container.querySelector('.error-message');
    if (error) {
      $container.removeChild(error);
    }
    // add the error if the message is not empty
    if (message) {
      var error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      $container.appendChild(error);
    }
  }

  $form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert('Your entries are validated!');
    }
  })
})();
