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