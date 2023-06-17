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
  const card = clone.querySelector('.element');
  //inject initialCards
  cardImage.src = initialCards[x].link;
  cardTitle.innerHTML = initialCards[x].name;
  // pasang event listener
  cardButton.addEventListener('click', selectPicture);
  cardButton.addEventListener('click', activeLike);
  // memindahkan tempalte ke container
  container.appendChild(clone);
}


// portfolio item add
const page = document.querySelector(".page");
const portfolioAddButton = document.querySelector('.profile__add-btn');
const portfolioCloseButton = document.querySelector('.popup-add__close');
const portfolioPopupBox = document.querySelector('.popupadd');
const portfolioImage = document.querySelector('input[name="popup-add__input-url"]');
const portfolioTitle = document.querySelector('input[name="popup-add__input-name"]');
const portfolioNameText = document.querySelector('.popup-add__name');
const portfolioWorkText = document.querySelector('.popup-add__work');
const portfolioForm = document.querySelector('.popupadd__form');


portfolioAddButton.addEventListener('click', () => {
  portfolioPopupBox.classList.add('popupadd_active');
});
const errMsg = document.querySelector('.error-msg');

portfolioForm.addEventListener('submit', function(event) {
  event.preventDefault();
  

  console.log(
      portfolioImage.value,
      portfolioTitle.value,
  )

  // logic
  if (portfolioImage.value.trim() === '') {
      errMsg.classList.add('error-msg--active');
      errMsg.textContent = 'Image Url harus diisi!';
      return false;
  }
  if (portfolioTitle.value.trim() === '') {
      errMsg.classList.add('error-msg--active');
      errMsg.textContent = 'Title harus diisi!';
      return false;
  }
  portfolioPopupBox.classList.remove('popupadd_active');
  
  const clone = template.content.cloneNode(true);

  const contentImage = clone.querySelector('.element__image');
  const contentTitle = clone.querySelector('.element__title');

  // memamasukkan nilai ke title
  contentImage.src = portfolioImage.value;
  contentTitle.textContent = portfolioTitle.value;

  // dorong template ke container
  container.appendChild(clone);


  // remove class
  errMsg.classList.remove('error-msg--active')
  // clean up value
  portfolioImage.value = '';
  portfolioTitle.value = '';
});

portfolioCloseButton.addEventListener('click', () => {
  portfolioPopupBox.classList.remove('popupadd_active');
});












// class elements
// element__button"
// var btns = document.querySelectorAll(".element__group");


// btns.forEach(function(btn) {

//   var icon = btn.querySelector(".element__button");


//   btn.onclick = function() {
//     if (icon.classList.contains("element__button")) {
//       icon.classList.replace("element__button", "element__button-active");
//     } else {
//       icon.classList.replace("element__button-active", "element__button");
//     }
//   };
// });