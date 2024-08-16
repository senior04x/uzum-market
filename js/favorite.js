import { findElement } from "./helper.js";

const elFavoritesList = findElement("#favorites-list");

function renderFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  elFavoritesList.innerHTML = "";

  if (favorites.length === 0) {
    elFavoritesList.innerHTML = ` <div class="container empty__text">
    <img class="empty__img" src="https://uzum.uz/static/img/hearts.cf414be.png" alt="img">
    <h2 class="empty__title">
      Sizga yoqqanini qoʻshing
    </h2>
    <p class="empty__item_text">Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi</p>
  </div>`;
  } else {
  favorites.forEach((product) => {
    const productHtml = `
      <div class="list__box" data-id="${product.id}">
        <div class="img__block">
          <img class="list__content_img" src="${product.imageSrc}" alt="${
      product.title
    }" />
          <img class="heart__btn" src="${
            product.isLiked
              ? "./img/liked-heart.svg"
              : "./img/unliked-heart.svg"
          }" alt="Like" />
          <span class="top__img_text">Aksiya</span>
        </div>
        <div class="title__box">
          <p class="content__list_title">${product.title}</p>
          <p class="star__text">${product.rating}</p>
          <span class="credit__list">${product.credit}</span>
          <div class="list__add_box">
          <div class="price__box">
          <span class="price__old">${product.oldPrice}</span>
          <span class="price__new">${product.newPrice}</span>
          </div>
          <button class="list__add_btn"></button>
        </div>
      </div>
        </div>
      </div>
      
    `;

    elFavoritesList.innerHTML += productHtml;
  });
  }
  document.querySelectorAll(".heart__btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const productElement = event.target.closest(".list__box");
      const productId = productElement.dataset.id;
      removeFromFavorites(productId);
    });
  });
}

function removeFromFavorites(productId) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const updatedFavorites = favorites.filter(
    (product) => product.id != productId
  );

  if (updatedFavorites.length === 0) {
    localStorage.removeItem("favorites");
  } else {
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }
  alert("Saralanganlardan o'chirmoqchimisz?");
  renderFavorites();
}

document.addEventListener("DOMContentLoaded", () => {
  renderFavorites();
});
const elWrapperProducts = findElement(".list__block");
elWrapperProducts.addEventListener("click", (event)=> {
  if (event.target.className.includes("list__content_img")) {
    const id = event.target.dataset.id
  localStorage.setItem("id",id)
  }
})