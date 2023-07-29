import Card from "../components/Card.js";
import PortfolioFormHandler from "../components/PopupWithForm.js";
import { container, initialCards } from "../components/Card.js";
import ImagePopup from "../components/PopupWithImage.js";
import {
    portfolioAddButton,
    portfolioCloseButton,
    popupForms,
  } from "../components/PopupWithForm.js";

  function addCardToContainerFn(cardData) {
    const newCard = new Card(cardData);
    container.prepend(newCard.generateCard());
  }
const portfolioFormHandler = new PortfolioFormHandler();

const imagePopup = new ImagePopup();

portfolioFormHandler.addCardToContainerFn = addCardToContainerFn; 
  
  portfolioAddButton.addEventListener("click", () => {
    portfolioFormHandler.openPopupBox();
  });
  
  portfolioCloseButton.addEventListener("click", (event) => {
    event.preventDefault();
    portfolioFormHandler.closePopupBox(); 
  });
  
  popupForms.addEventListener("click", () => {
    portfolioFormHandler.closePopupBox(); 
  });

