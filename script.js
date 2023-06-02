function openForm() {
    var popup = document.getElementsByClassName("form")[0];
    popup.style.display = "block";
  }

  function submitForm(event) {
    event.preventDefault(); // Prevent form submission
    var newName = document.getElementsByClassName("form__field-1")[0].value;
    var newSubName = document.getElementsByClassName("form__field-2")[0].value;

    // Update the profile name
    var profileName = document.getElementById("profile__profile-info_title");
    var subProfileName = document.getElementById("profile__profile-info_subtitle");
    profileName.textContent = newName;
    subProfileName.textContent = newSubName;

    closeForm();
  }

  function closeForm() {
    var popup = document.getElementsByClassName("form")[0];
    popup.style.display = "none";
  }

  // Get the form element by class name
  var formElement = document.getElementsByClassName('form__open')[0].querySelector('form');
  // Get the name input element by class name
  var nameInput = document.getElementsByClassName('field-1')[0];
  // Get the close button by class name
  var closeButton = document.getElementsByClassName('close')[0];

  // Add event listener to form submission
  formElement.addEventListener('submit', submitForm);
  // Add event listener to close button
  closeButton.addEventListener('click', closeForm);