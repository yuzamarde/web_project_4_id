// profile edit
const editProfileButton = document.querySelector('.profile__edit-btn');
const closePopupButton = document.querySelector('.popup__close');
const editPopupBox = document.querySelector('.popup');
const authorNewName = document.querySelector('input[name="popup__input_name"]');
const authorNewWork = document.querySelector('input[name="popup__input_work"]');
const authorName = document.querySelector('.profile__name');
const authorWork = document.querySelector('.profile__work');
const editAuthorPopupForm = document.querySelector('.popup__form');

editProfileButton.addEventListener('click', () => {
  editPopupBox.classList.add('popup_active');
  authorNewName.value = authorName.textContent;
  authorNewWork.value = authorWork.textContent;
});

editAuthorPopupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  authorName.textContent = authorNewName.value;
  authorWork.textContent = authorNewWork.value;
  editPopupBox.classList.remove('popup_active');
});

closePopupButton.addEventListener('click', () => {
  editPopupBox.classList.remove('popup_active');
});

// template
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

function selectPicture() {
  console.log(this.parentElement);
  const pictureName = this.parentElement.querySelector('.element__title');
  console.log(pictureName);
}

function activeLike(evt) {
  evt.target.classList.toggle('element__button-active');
}

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

function checkFormInputs() {
    const urlValue = portfolioImage.value.trim();
    const nameValue = portfolioTitle.value.trim();
    
    if (urlValue !== '' && nameValue !== '') {
      submitButton.classList.add('forms__submit-active');
    } else {
      submitButton.classList.remove('forms__submit-active');
    }
    portfolioForm.addEventListener('submit', (event) => {
      event.preventDefault();
      portfolioImage.textContent = '';
      portfolioTitle.textContent = '';
      submitButton.classList.remove('forms__submit-active');
    });
  }

  portfolioForm.addEventListener('submit', (event) => {
    event.preventDefault();
  //   // Get the input values
    const urlValue = portfolioImage.value.trim();
    const nameValue = portfolioTitle.value.trim();
    submitButton.classList.remove('forms__submit-active');
    
    // Display the input values
    portfolioImage.textContent = urlValue;
    portfolioTitle.textContent = nameValue;
  });
  
  
  // Add event listeners to the input fields
  portfolioImage.addEventListener('input', checkFormInputs);
  portfolioTitle.addEventListener('input', checkFormInputs);
  
  
  portfolioAddButton.addEventListener('click', () => {
    portfolioPopupBox.classList.add('forms_active');
  });
  
  const errImg = document.querySelector('.forms__error-img');
  const errMsg = document.querySelector('.forms__error-msg');


  

portfolioForm.addEventListener('submit', function(event) {
  event.preventDefault();

  console.log(
    portfolioImage.value,
    portfolioTitle.value,
)

errImg.textContent = '';
errMsg.textContent = '';

  const urlValue = portfolioImage.value.trim();
  const nameValue = portfolioTitle.value.trim();

  if (portfolioImage.value.trim() === '' && portfolioTitle.value.trim() === '') {
    errImg.textContent = 'Image Url harus diisi!';
    errMsg.textContent = 'Title harus diisi!';
    return false;
}

if (portfolioImage.value.trim() === '') {
    errImg.classList.add('forms__error-img--active');
    errImg.textContent = 'Image Url harus diisi!';
    return false;
}
if (portfolioTitle.value.trim() === '') {
    errMsg.classList.add('forms__error-msg--active');
    errMsg.textContent = 'Title harus diisi!';
    return false;
}
  portfolioPopupBox.classList.remove('forms_active');

  addCardToContainer({ name: nameValue, link: urlValue });
  
  // remove class
  errMsg.classList.remove('forms__error-msg--active')
  errImg.classList.remove('forms__error-img--active')
  
  portfolioImage.value = '';
  portfolioTitle.value = '';
});

portfolioAddButton.addEventListener('click', () => {
  portfolioPopupBox.classList.add('forms_active');
});

portfolioCloseButton.addEventListener('click', (event) => {
  event.preventDefault();
  portfolioPopupBox.classList.remove('forms_active');
});

// image popup
const elements = document.querySelectorAll('.element');
const popupImage = document.querySelector('.zoom');
const popupImageFile = document.querySelector('.zoom__file');
const popupImageTitle = document.querySelector('.zoom__title');
const popupImageClose = document.querySelector('.zoom__close');


elements.forEach(element => {
  const image = element.querySelector('.element__image');
  const title = element.querySelector('.element__title');

  image.addEventListener('click', () => {
    popupImageFile.src = image.src;
    popupImageTitle.textContent = title.textContent;
    popupImage.classList.add('zoom_active');
  });
});

popupImageClose.addEventListener('click', () => {
  popupImage.classList.remove('zoom_active');
});

// Delete element
const deleteButtons = document.querySelectorAll('.element__delete');

deleteButtons.forEach((deleteButton) => {
  deleteButton.addEventListener('click', deleteElement);
});
