const password = document.getElementById('password');
const password_confirm = document.getElementById('password-confirm');
const password_error_text = document.getElementById('error-text');
const sign_up_button = document.getElementById('sign-up-button');

function check_password() {
  if (password.value == password_confirm.value &&
    (password.value != " " || password_confirm != "")) {
    set_text_content(password_error_text, "");
    remove_border(password, password_confirm, "red-border");
    add_border(password, password_confirm, 'green-border');
    set_text_content(password_confirm, "");
  }
  else {
    set_text_content(password_error_text, "* Passwords do not match");
    remove_border(password, password_confirm, "green-border");
    add_border(password, password_confirm, "red-border");
    set_text_content(password_confirm, "Error: Passwords do not match. Please try again.");
  }
}

function add_border(property, property2 = null, value) {
  property.classList.add(value);
  property2.classList.add(value);
}

function remove_border(property, property2 = null, value) {
  property.classList.remove(value);
  property2.classList.remove(value);
}

function set_text_content(property, value) {
  property.textContent = value;
}

function set_custom_validity(property, value) {
  property.setCustomValidity(value);
}
function setupListeners() {
  password_confirm.addEventListener('change', check_password);
  sign_up_button.addEventListener('click', check_password);
}

function init() {
  setupListeners();
}

init();