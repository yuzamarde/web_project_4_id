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



// portfolio item add
const page = document.querySelector(".page");
const portfolioAddButton = page.querySelector('.profile__add-btn');
const portfolioCloseButton = page.querySelector('.popup-add__close');
const portfolioPopupBox = page.querySelector('.popupadd');
const portfolioNameInput = page.querySelector('input[name="popup-add__input-name"]');
const portfolioWorkInput = page.querySelector('input[name="popup-add__input-work"]');
const portfolioNameText = page.querySelector('.popup-add__name');
const portfolioWorkText = page.querySelector('.popup-add__work');
const portfolioForm = page.querySelector('.popupadd__form');

portfolioAddButton.addEventListener('click', () => {
  portfolioPopupBox.classList.add('popupadd_active');
  portfolioNameInput.value = '';
  portfolioWorkInput.value = '';
});

// portfolioForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   portfolioNameText.textContent = portfolioNameInput.value;
//   portfolioWorkText.textContent = portfolioWorkInput.value;
//   portfolioPopupBox.classList.remove('popupadd_active');
// });

portfolioCloseButton.addEventListener('click', () => {
  portfolioPopupBox.classList.remove('popupadd_active');
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
  this.parentElement.classList.add('element--active');
}

function activeCard() {
  console. log(this)
this.classList.add('element--active');
}

for (let x = 0; x < 6; x++) {
  const clone = template.content.cloneNode(true);
  // console. log(clone)
  // template diinject ke dalam container
  const cardImage = clone.querySelector('.element__image');
  const cardTitle = clone.querySelector('.element__title');
  const cardButton = clone.querySelector('.element__button');
  const card = clone.querySelector('.element');
  //inject initialCards
  cardImage.src = initialCards[x].link;
  cardTitle.innerHTML = initialCards[x].name;
  // pasang event listener
  cardButton.addEventListener('click', selectPicture);
  card.addEventListener('click', activeCard);
  // memindahkan tempalte ke container
  container.appendChild(clone);
}











// class elements
// element__button"
var btns = document.querySelectorAll(".element__group");


btns.forEach(function(btn) {

  var icon = btn.querySelector(".element__button");


  btn.onclick = function() {
    if (icon.classList.contains("element__button")) {
      icon.classList.replace("element__button", "element__button-active");
    } else {
      icon.classList.replace("element__button-active", "element__button");
    }
  };
});