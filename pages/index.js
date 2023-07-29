import Card from "../components/Card.js";
import PortfolioFormHandler from "../components/PopupWithForm.js";
import { container, initialCards } from "../components/Card.js";
import {
    portfolioAddButton,
    portfolioCloseButton,
    popupForms,
  } from "../components/PopupWithForm.js";
  

  function addCardToContainerFn(cardData) {
    // Create a new card instance with the provided data
    const newCard = new Card(cardData);
  
    // Append the generated card element to the container
    container.prepend(newCard.generateCard());
  }
  
  // Instantiate the PortfolioFormHandler class
const portfolioFormHandler = new PortfolioFormHandler();
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
  
  

  

  
  
