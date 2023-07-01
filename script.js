// popup-edit profile
const editProfileButton = document.querySelector('.profile__edit-btn');
const closePopupButton = document.querySelector('.popup__close');
const editPopupBox = document.querySelector('.popup');
const authorNewName = document.querySelector('input[name="popup__input-name"]');
const authorNewWork = document.querySelector('input[name="popup__input-work"]');
const authorName = document.querySelector('.profile__name');
const authorWork = document.querySelector('.profile__work');
const editAuthorPopupForm = document.querySelector('.popup__form');
const popupOverlay = document.querySelector('.popup__overlay');

editProfileButton.addEventListener('click', () => {
  openPopup();
  editPopupBox.classList.add('popup_active');
  authorNewName.value = authorName.textContent;
  authorNewWork.value = authorWork.textContent;
});

editAuthorPopupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  authorName.textContent = authorNewName.value;
  authorWork.textContent = authorNewWork.value;
  editPopupBox.classList.remove('popup_active');
  authorNewName.value = '';
  authorNewWork.value = '';
});



closePopupButton.addEventListener('click', () => {
  editPopupBox.classList.remove('popup_active');
  const errorElements = editPopupBox.querySelectorAll('.popup__input-error');
  const errorInputElements = editPopupBox.querySelectorAll('.popup__input');
  const errorBottomInactive = editPopupBox.querySelectorAll('.popup__submit');
  errorElements.forEach((errorElement) => {
    errorElement.classList.remove('popup__input-error_active');
  });
  errorInputElements.forEach((errorInputElement) => {
    errorInputElement.classList.remove('popup__input_type_error');
  });
  errorBottomInactive.forEach((errorBottomInactive) => {
    errorBottomInactive.classList.remove('popup__submit_inactive');
  });
});

popupOverlay.addEventListener('click', () => {
  editPopupBox.classList.remove('popup_active');
  const errorElements = editPopupBox.querySelectorAll('.popup__input-error');
  const errorInputElements = editPopupBox.querySelectorAll('.popup__input');
  const errorBottomInactive = editPopupBox.querySelectorAll('.popup__submit');
  errorElements.forEach((errorElement) => {
    errorElement.classList.remove('popup__input-error_active');
  });
  errorInputElements.forEach((errorInputElement) => {
    errorInputElement.classList.remove('popup__input_type_error');
  });
  errorBottomInactive.forEach((errorBottomInactive) => {
    errorBottomInactive.classList.remove('popup__submit_inactive');
  });
});

const openPopup = () => {
  const closePopupEsc = () => {
    editPopupBox.classList.remove('popup_active');
    const errorElements = editPopupBox.querySelectorAll('.popup__input-error');
    const errorInputElements = editPopupBox.querySelectorAll('.popup__input');
    const errorBottomInactive = editPopupBox.querySelectorAll('.popup__submit');
    errorElements.forEach((errorElement) => {
      errorElement.classList.remove('popup__input-error_active');
    });
    errorInputElements.forEach((errorInputElement) => {
      errorInputElement.classList.remove('popup__input_type_error');
    });
    errorBottomInactive.forEach((errorBottomInactive) => {
      errorBottomInactive.classList.remove('popup__submit_inactive');
    });

    document.removeEventListener('keydown', handleKeyDown);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closePopupEsc();
    }
  };
  document.addEventListener('keydown', handleKeyDown);

};




// template cards
const template = document.querySelector('.elements');
const container = document.querySelector('.container');
const initialCards = [
  {
    name: "Lembah Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Danau Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Pegunungan Gundul",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Gunung Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Taman Nasional Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];


// Element card code to fungction with eny alse
function selectPicture() {
  const pictureName = this.parentElement.querySelector('.element__title');
  console.log(pictureName);
}

//to active like button
function activeLike(evt) {
  evt.target.classList.toggle('element__button-active');
}

// to delete clone cards
function deleteElement() {
  const element = this.parentElement;
  element.remove();
}

function createCard(cardData) {
  const clone = template.content.cloneNode(true);
  const cardImage = clone.querySelector('.element__image');
  const cardTitle = clone.querySelector('.element__title');
  const cardButton = clone.querySelector('.element__button');
  const deleteButton = clone.querySelector('.element__delete');

  cardImage.src = cardData.link;
  cardTitle.innerHTML = cardData.name;

  cardButton.addEventListener('click', selectPicture);
  cardButton.addEventListener('click', activeLike);
  cardImage.addEventListener('click', () => {
    popupImageFile.src = cardData.link;
    popupImageTitle.textContent = cardData.name;
    openFormsZoom(popupImage);
    popupImage.classList.add('zoom_active');
  });
  deleteButton.addEventListener('click', deleteElement);

  return clone;
}

function addCardToContainer(cardData) {
  const newCard = createCard(cardData);
  const firstElement = container.firstChild;
  container.insertBefore(newCard, firstElement);
}

for (let x = 0; x < initialCards.length; x++) {
  addCardToContainer(initialCards[x]);
}

// portfolio item add
const page = document.querySelector(".page");
const portfolioAddButton = document.querySelector('.profile__add-btn');
const portfolioCloseButton = document.querySelector('.forms__close');
const portfolioPopupBox = document.querySelector('.forms');
const portfolioImage = document.querySelector('input[name="form__input-url"]');
const portfolioTitle = document.querySelector('input[name="form__input-name"]');
const portfolioForm = document.querySelector('.forms__form');
const submitButton = document.querySelector('.forms__submit');
const popupForms = document.querySelector('.forms__overlay');
  
  
portfolioForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const urlValue = portfolioImage.value.trim();
  const nameValue = portfolioTitle.value.trim();
  portfolioPopupBox.classList.remove('forms_active');
  addCardToContainer({ name: nameValue, link: urlValue });
  portfolioImage.value = '';
  portfolioTitle.value = '';
});

// show or close popup form
portfolioAddButton.addEventListener('click', () => {
  openFormsPopup();
  portfolioPopupBox.classList.add('forms_active');
});

portfolioCloseButton.addEventListener('click', (event) => {
  event.preventDefault();
  portfolioPopupBox.classList.remove('forms_active');
});
popupForms.addEventListener('click', (event) => {
  event.preventDefault();
  portfolioPopupBox.classList.remove('forms_active');
});

//press esc
const openFormsPopup = () => {
  const closePopupForm = () => {
    portfolioPopupBox.classList.remove('forms_active');
    document.removeEventListener('keydown', handleKeyDown);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closePopupForm();
    }
  };
  document.addEventListener('keydown', handleKeyDown);
};





// image popup
const elements = document.querySelectorAll('.element');
const popupImage = document.querySelector('.zoom');
const popupImageFile = document.querySelector('.zoom__file');
const popupImageTitle = document.querySelector('.zoom__title');
const popupImageClose = document.querySelector('.zoom__close');
const zoomOverlay = document.querySelector('.zoom__overlay');

elements.forEach(element => {
  const image = element.querySelector('.element__image');
  const title = element.querySelector('.element__title');

  image.addEventListener('click', () => {
    popupImageFile.src = image.src;
    popupImageTitle.textContent = title.textContent;
    openFormsZoom(popupImage);
    popupImage.classList.add('zoom_active');
  });
});

popupImageClose.addEventListener('click', () => {
  popupImage.classList.remove('zoom_active');
});

zoomOverlay.addEventListener('click', () => {
  popupImage.classList.remove('zoom_active');
});

const openFormsZoom = () => {
  const closePopupZoom = () => {
    popupImage.classList.remove('zoom_active');
    document.removeEventListener('keydown', handleKeyDown);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closePopupZoom();
    }
  };
  document.addEventListener('keydown', handleKeyDown);
};

// Delete element
const deleteButtons = document.querySelectorAll('.element__delete');

deleteButtons.forEach((deleteButton) => {
  deleteButton.addEventListener('click', deleteElement);
});


