import { findElement } from "./helper.js";

const mainContent = findElement(".main__content");
const id = localStorage.getItem("id") ? +localStorage.getItem("id") : 1;
const products = JSON.parse(localStorage.getItem("products")) || [];

const product = products.find((item) => item.id === id);

if (product) {
  const mainProducthtml = `
    <div class="main__box" data-id="${product.id}">
      <img src="${product.imageSrc}" alt="${product.title}" id="main-img" />
    </div>
    <div class="main__content_box">
      <div class="main__star_box">
        <div class="main__star_block">
          <p class="star__text">
            <button class="star__btn"></button>
            ${product.rating} (${product.reviewsCount} baxo)
          </p>
          <p class="main__star_commit">
            <span class="main__star_span_commit">${product.ordersCount}</span> ta buyurtma
          </p>
        </div>
        <p class="heart__text" style="display: flex; gap: 10px;">
          <img src="${product.isLiked ? './img/liked-heart.svg' : './img/unliked-heart.svg'}" alt="btn" /> istaklarda
        </p>
      </div>
      <h1 class="main__title">${product.title}</h1>
      <p class="seller__text">
        Sotuvchi: <a class="seller__link" href="${product.sellerLink}">${product.seller}</a>
      </p>
      <hr />
      <p class="miqdor__text">Miqdor:</p>
      <div class="miqdor__box">
        <div class="miqdor__number_box">
          <button class="minus__button">-</button>
          <p class="miqdor__number">1</p>
          <button class="plus__button">+</button>
        </div>
        <p class="text__product_quantity">
          Sotuvda <span class="span__product_quantity">${product.available}</span> dona bor
        </p>
      </div>
      <p class="main__product_price_text">Narx:</p>
      <h2 class="main__product_new_price">${product.newPrice} so'm <p class="main__product_old_price">${product.oldPrice} so'm</p></h2>
      <button class="main__product_monthly_btn">
        <div class="main__product_monthly_price_box">
          <p class="main__product_monthly_price">
            <span class="main__product_monthly_price_number">Oyiga ${product.credit} so'mdan</span>
          </p>
          <p class="main__product_text">muddatli to'lov</p>
        </div>
        <p class="monthly__price_btn_simple">></p>
      </button>
      <div class="main__product_add">
        <button class="add__product_btn">Savatga qoʻshish</button>
        <button class="buy__product_btn">Tugmani 1 bosishda xarid qilish</button>
      </div>
      <ul class="payment__method_list">
        <li class="payment__method_item">
          <h4 class="payment__method_title">Tezkor yetkazish 1 kundan boshlab</h4>
          <p class="payment__method_text">Uzum buyurtmalarni topshirish punktida yoki kuryer orqali</p>
        </li><hr>
        <li class="payment__method_item">
          <h4 class="payment__method_title">Qulay usulda xavfsiz toʻlov</h4>
          <p class="payment__method_text">Karta orqali, naqd pulda yoki boʻlib toʻlang</p>
          <ul class="payment__method_cards">
            <li><img src="./img/uzum-bank-icon.svg" alt=""></li>
            <li><img src="./img/uzum-nasiya-icon.svg" alt=""></li>
            <li><img src="./img/uzcard-icon.svg" alt=""></li>
            <li><img src="./img/humo-card-icon.svg" alt=""></li>
            <li><img src="./img/visa-icon.svg" alt=""></li>
            <li><img src="./img/mastercard-icon.svg" alt=""></li>
            <li><img src="./img/naqt-pul-icon.svg" alt=""></li>
          </ul>
        </li><hr>
        <li class="payment__method_item">
          <h4 class="payment__method_title">Tezkor yetkazish 1 kundan boshlab</h4>
          <p class="payment__method_text">Tovarlarni 10 kun ichida qabul qilamiz va darhol pulini qaytaramiz</p>
        </li>
      </ul>
      <div class="payment__add_box">
        <img src="./img/payment-add.svg" alt="">
        <p class="payment__add_text">Bu haftada <span class="payment-add_span">${product.sales}</span> sotib oldi</p>
      </div>
    </div>`;
  
  mainContent.innerHTML = mainProducthtml;
}

  document.addEventListener("DOMContentLoaded", () => {
  
    const minusButton = document.querySelector(".minus__button");
    const plusButton = document.querySelector(".plus__button");
    const numberElement = document.querySelector(".miqdor__number");
    const priceElement = document.querySelector(".main__product_new_price");

    function updateNumber(delta) {
      let currentNumber = parseInt(numberElement.textContent, 10);
      let newNumber = currentNumber + delta;

      if (newNumber < 1) newNumber = 1;

      numberElement.textContent = newNumber;
      minusButton.disabled = newNumber === 1;
    }



    
    minusButton.addEventListener("click", () => {
      updateNumber(-1);
    });

    plusButton.addEventListener("click", () => {
      updateNumber(1);
    });
  
  });


  
  


