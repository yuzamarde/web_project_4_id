fetch("https://around.nomoreparties.co/v1/web_idn_02/cards", {
  headers: {
    authorization: "94793163-405f-42a5-9c1e-1be6bfc4ef68"
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  });