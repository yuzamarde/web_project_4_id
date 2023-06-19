// profile edit
const tombol = document.querySelector('.profile__edit-btn');
const close = document.querySelector('.popup__close');
const box = document.querySelector('.popup');
const input = document.querySelector('input[name="popup__input-name"]');
const subtextInput = document.querySelector('input[name="popup__input-work"]');
const text = document.querySelector('.profile__name');
const subtext = document.querySelector('.profile__work');
const form = document.querySelector('.popup__form');


// popup edit name
tombol.addEventListener('click', () => {
  box.classList.add('popup_active');
  input.value = text.textContent;
  subtextInput.value = subtext.textContent;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  text.textContent = input.value;
  subtext.textContent = subtextInput.value;
  box.classList.remove('popup_active');
});

close.addEventListener('click', () => {
  box.classList.remove('popup_active');
});



// templete
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
  // console. log('click')
  console.log(this.parentElement);
  const pictureName = this.parentElement.querySelector('.element__title');
  console.log(pictureName);
  // ketika button di click warna card jadi abu abu
  // this.parentElement.classList.add('element__button-active');
  
}

function activeLike(evt) {
  evt.target.classList.toggle('element__button-active');
}

for (let x = 0; x < 6; x++) {
  const clone = template.content.cloneNode(true);
  // console. log(clone)
  // template diinject ke dalam container
  const cardImage = clone.querySelector('.element__image');
  const cardTitle = clone.querySelector('.element__title');
  const cardButton = clone.querySelector('.element__button');
  //inject initialCards
  cardImage.src = initialCards[x].link;
  cardTitle.innerHTML = initialCards[x].name;
  // pasang event listener
  cardButton.addEventListener('click', selectPicture);
  cardButton.addEventListener('click', activeLike);
  // memindahkan tempalte ke container
  const firstElement = container.firstChild;
  container.insertBefore(clone, firstElement);
}


// portfolio item add
const page = document.querySelector(".page");
const portfolioAddButton = document.querySelector('.profile__add-btn');
const portfolioCloseButton = document.querySelector('.form__close');
const portfolioPopupBox = document.querySelector('.form');
const portfolioImage = document.querySelector('input[name="form__input-url"]');
const portfolioTitle = document.querySelector('input[name="form__input-name"]');
const portfolioNameText = document.querySelector('.popup-add__name');
const portfolioWorkText = document.querySelector('.popup-add__work');
const portfolioForm = document.querySelector('.form__form');
const submitButton = document.querySelector('.form__submit');

// Function to check if both form inputs are filled
function checkFormInputs() {
  const urlValue = portfolioImage.value.trim();
  const nameValue = portfolioTitle.value.trim();
  
  if (urlValue !== '' && nameValue !== '') {
    submitButton.classList.add('filled');
  } else {
    submitButton.classList.remove('filled');
  }
}

// Add event listeners to the input fields
portfolioImage.addEventListener('input', checkFormInputs);
portfolioTitle.addEventListener('input', checkFormInputs);


portfolioAddButton.addEventListener('click', () => {
  portfolioPopupBox.classList.add('form_active');
});

const errImg = document.querySelector('.form__error-img');
const errMsg = document.querySelector('.form__error-msg');



portfolioForm.addEventListener('submit', function(event) {
  event.preventDefault();
  

  console.log(
      portfolioImage.value,
      portfolioTitle.value,
  )

  errImg.textContent = '';
  errMsg.textContent = '';
  // logic

  if (portfolioImage.value.trim() === '' && portfolioTitle.value.trim() === '') {
      errImg.textContent = 'Image Url harus diisi!';
      errMsg.textContent = 'Title harus diisi!';
      return false;
  }

  if (portfolioImage.value.trim() === '') {
      errImg.classList.add('form__error-img--active');
      errImg.textContent = 'Image Url harus diisi!';
      return false;
  }
  if (portfolioTitle.value.trim() === '') {
      errMsg.classList.add('form__error-msg--active');
      errMsg.textContent = 'Title harus diisi!';
      return false;
  }
  portfolioPopupBox.classList.remove('form_active');
  
  const clone = template.content.cloneNode(true);

  const contentImage = clone.querySelector('.element__image');
  const contentTitle = clone.querySelector('.element__title');

  // memamasukkan nilai ke title
  contentImage.src = portfolioImage.value;
  contentTitle.textContent = portfolioTitle.value;

  // dorong template ke container
  const firstElement = container.firstChild;
  container.insertBefore(clone, firstElement);


  // remove class
  errMsg.classList.remove('form__error-msg--active')
  errImg.classList.remove('form__error-img--active')
  
  // clean up value
  portfolioImage.value = '';
  portfolioTitle.value = '';

});
// remove popup-form
portfolioCloseButton.addEventListener('click', (event) => {
  event.preventDefault();
  portfolioPopupBox.classList.remove('form_active');
});


// image popup
const elements = document.querySelectorAll('.element');
const popupImage = document.querySelector('.zoom');
const popupImageFile = document.querySelector('.zoom__file');
const popupImageTitle = document.querySelector('.zoom__title');
const popupImageClose = document.querySelector('.zoom__close');

// Event listener for each element
elements.forEach(element => {
  const image = element.querySelector('.element__image');
  const title = element.querySelector('.element__title');

  image.addEventListener('click', () => {
    popupImageFile.src = image.src;
    popupImageTitle.textContent = title.textContent;
    popupImage.classList.add('zoom_active');
  });
});

// Event listener for closing the popup image
popupImageClose.addEventListener('click', () => {
  popupImage.classList.remove('zoom_active');
});


// delete element
const deleteButtons = document.querySelectorAll('.element__delete');

// Add click event listener to each delete button
deleteButtons.forEach((deleteButton) => {
  deleteButton.addEventListener('click', () => {
    const element = deleteButton.parentElement;
    element.remove();
  });
});