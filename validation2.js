const showProfileInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error");
  errorElement.classList.add("popup__input-error_active");
  errorElement.textContent = errorMessage;
};

const hideProfileInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__input-error_active");
  errorElement.textContent = "";
};

const checkProfileInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showProfileInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideProfileInputError(formElement, inputElement);
  }
};



const hasProfileInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleProfileButtonState = (formElement, buttonElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  if (hasProfileInvalidInput (inputList)) {
    buttonElement.classList.add("popup__submit_inactive");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("popup__submit_inactive");
    buttonElement.disabled = false;
  }
};
// const toggleProfileButtonState = (formElement, buttonElement) => {
//   const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
//   const authorNewName = formElement.querySelector('input[name="popup__input-name"]');
//   const authorNewWork = formElement.querySelector('input[name="popup__input-work"]');

//   if (hasProfileInvalidInput(inputList) || authorNewName.value.trim() === '' || authorNewWork.value.trim() === '') {
//     buttonElement.classList.add("popup__submit_inactive");
//     buttonElement.disabled = true;
//   } else {
//     buttonElement.classList.remove("popup__submit_inactive");
//     buttonElement.disabled = false;
//   }
// };

const setProfileEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__submit");

  toggleProfileButtonState(formElement, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkProfileInputValidity(formElement, inputElement);
      toggleProfileButtonState(formElement, buttonElement);
    });
  });
};

const enableProfileValidation  = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();

      const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
      inputList.forEach((inputElement) => {
        checkProfileInputValidity(formElement, inputElement);
      });

      const buttonElement = formElement.querySelector(".popup__submit");
      toggleProfileButtonState(formElement, buttonElement);
    });

    setProfileEventListeners(formElement);
  });
};

enableProfileValidation ();


