const listcard = [
    {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c1", 
      image: "/image/Foods.jpg",
      name: "FOOD",
      title: "Here are more details about the card.",
      describe: "This is a description of the card. It provides more details about the content of the card."
    },
    {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c2", 
      image: "/image/drink.jpg",
      name: "DRINK",
      title: "Here are more details about the card.",
      describe: "This is a description of the card. It provides more details about the content of the card."
    },
    {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c3",  
      image: "/image/cake1.jpg",
      name: "CAKE",
      title: "Here are more details about the card.",
      describe: "This is a description of the card. It provides more details about the content of the card."
    },
    {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c4", 
      name: "PASTRY",
      image: "/image/pas6.jpg",
      title: "Here are more details about the card.",
      describe: "This is a description of the card. It provides more details about the content of the card."
    }
  ];
  
  let productsHtml = '';
  listcard.forEach((card) => {
    productsHtml += `
      <div class="card" id="interactiveCard-${card.id}">
        <img src="${card.image}" alt="Card Image" class="card-image">
        <div class="card-content">
          <h2 class="card-title">${card.name}</h2>
          <p style="font-size: 14px;">${card.title}</p>
          <div id="detail-${card.id}" style="display: none;">${card.describe}</div>
          <button class="button-card" data-card-id="${card.id}">Read More</button>
        </div>
      </div>
    `
  });
  document.querySelector('.card_display').innerHTML = productsHtml;

  document.querySelectorAll(".button-card").forEach((button) => {
    button.addEventListener('click', () => {
      const cardId = button.getAttribute('data-card-id');
      const detailElement = document.getElementById(`detail-${cardId}`);
  
      if (detailElement.style.display === 'none' || detailElement.style.display === '') {
        detailElement.style.display = 'block';
      } else {
        detailElement.style.display = 'none';
      }
    });
  });
  
  const btn = document.getElementById("button1");
  const Detail = document.getElementById("detail");

    btn.onclick = function () {
      if (Detail.style.display === 'none' || Detail.style.display === '') {
        Detail.style.display = 'block';
      } else {
        Detail.style.display = 'none';
      }
    };
  