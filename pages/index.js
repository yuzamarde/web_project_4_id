import Card from "../components/Card.js";
import PortfolioFormHandler from "../components/PopupWithForm.js";
import { container, initialCards } from "../components/Card.js";
import ImagePopup from "../components/PopupWithImage.js";
import {
    portfolioAddButton,
    portfolioCloseButton,
    popupForms,
  } from "../components/PopupWithForm.js";
import Profile from '../components/UserInfo.js';

// Profile
// add new profile
  const userProfile = new Profile();
// popup utilz





// ImagePopup
  const portfolioFormHandler = new PortfolioFormHandler();
  const imagePopup = new ImagePopup();

//Card
  function addCardToContainerFn(cardData) {
    const newCard = new Card(cardData);
    container.prepend(newCard.generateCard());
  }
//popup add new card
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



  // Add the cloned card and set up event listeners for it


