import Card from "../components/Card.js";
import PortfolioFormHandler from "../components/PopupWithForm.js";
import PopprofileFormHandler from "../components/Popprofile.js";
import { container, initialCards } from "../components/Card.js";
import ImagePopup from "../components/PopupWithImage.js";
import Profile from '../components/UserInfo.js';
import Section from '../components/Section.js';

// Profile
// add new profile
const userProfile = new Profile();
// popup utilz


// ImagePopup
  const portfolioFormHandler = new PortfolioFormHandler();
  const popprofileFormHandler = new PopprofileFormHandler();
  const imagePopup = new ImagePopup();

//Card
  function addCardToContainerFn(cardData) {
    const newCard = new Card(cardData);
    container.prepend(newCard.generateCard());
  }
//popup add new card
  portfolioFormHandler.addCardToContainerFn = addCardToContainerFn; 

  export {
    userProfile,
    portfolioFormHandler,
    popprofileFormHandler,
    imagePopup,
    addCardToContainerFn,
  };