import { findElement } from "./helper.js";
import { products } from "./content.js";

const elWrapperProducts = findElement(".list__block");
const elTemplate = findElement("#template");
const elMoreProductsBtn = findElement("#more-btn");
const elLessProductsBtn = findElement("#less-btn");
const elResetBtn = findElement("#less-btn"); 
let pageCount = 1;
const perPage = 5;

function renderProducts() {
  const startIndex = (pageCount - 1) * perPage;
  const endIndex = startIndex + perPage;

  if (pageCount === 1) {
    elWrapperProducts.innerHTML = "";
  }

  products.slice(startIndex, endIndex).forEach((product) => {
    const newTemplate = elTemplate.content.cloneNode(true);
    const elImg = findElement(".list__content_img", newTemplate);
    elImg.src = product.imageSrc;

    const elFavoriteBtn = findElement(".heart__btn", newTemplate);
    const elTitle = findElement(".content__list_title", newTemplate);
    elTitle.textContent = product.title;

    const elCredit = findElement(".credit__list", newTemplate);
    elCredit.textContent = product.credit;

    const elPriceOld = findElement(".price__old", newTemplate);
    elPriceOld.textContent = product.oldPrice;

    const elPriceNew = findElement(".price__new", newTemplate);
    elPriceNew.textContent = product.newPrice;

    const elEditBtn = findElement(".product__edit_btn", newTemplate);
    const elDeleteBtn = findElement(".product__delete_btn", newTemplate);

    elFavoriteBtn.addEventListener("click", () => {
      product.isLiked = !product.isLiked;
      elFavoriteBtn.src = product.isLiked ? "./img/liked-heart.svg" : "./img/unliked-heart.svg";
    });

    elEditBtn.addEventListener("click", () => {
      openEditForm(product);
    });

    elDeleteBtn.addEventListener("click", () => {
      if (confirm("Ushbu mahsulotni o'chirmoqchimisz?")) {
        deleteProduct(product.id);
      }
    });

    if (product.isLiked) {
      elFavoriteBtn.src = "./img/liked-heart.svg";
    } else {
      elFavoriteBtn.src = "./img/unliked-heart.svg";
    }

    elWrapperProducts.appendChild(newTemplate);
  });

  elMoreProductsBtn.style.display = endIndex < products.length ? "block" : "none";
  elLessProductsBtn.style.display = pageCount > 3 ? "block" : "none"; 
}

function openEditForm(product) {
  document.getElementById("title__input").value = product.title;
  document.getElementById("img__input").value = product.imageSrc;
  document.getElementById("price__input").value = product.newPrice;
  document.getElementById("aksiya__input").value = product.oldPrice;
  document.getElementById("monthly__input").value = product.credit;
  document.getElementById("drawer__button").dataset.productId = product.id;

  const offcanvas = new bootstrap.Offcanvas(
    document.getElementById("offcanvasRight")
  );
  offcanvas.show();
}

document
  .getElementById("drawer__button")
  .addEventListener("click", function () {
    const title = document.getElementById("title__input").value.trim();
    const imgSrc = document.getElementById("img__input").value.trim();
    const price = document.getElementById("price__input").value.trim();
    const monthly = document.getElementById("monthly__input").value.trim();
    const aksiyaPrice = document.getElementById("aksiya__input").value.trim();
    const productId = this.dataset.productId;

    if (!title || !imgSrc || !price || !monthly || !aksiyaPrice) {
      alert("Qiymat bosh bo'lmasligi kerak");
      return;
    }

    if (productId) {
      const product = products.find((p) => p.id == productId);
      if (product) {
        product.title = title;
        product.imageSrc = imgSrc;
        product.newPrice = price;
        product.oldPrice = aksiyaPrice;
        product.credit = monthly;
      }
    } else {
      const newProduct = {
        id: products.length + 1,
        imageSrc: imgSrc,
        title: title,
        rating: "4.0 (0 sharhlar)",
        credit: monthly,
        oldPrice: aksiyaPrice,
        newPrice: price,
        imgText: "Aksiya",
        isLiked: false,
      };

      products.push(newProduct);
    }

    renderProducts();

    document.getElementById("title__input").value = "";
    document.getElementById("img__input").value = "";
    document.getElementById("price__input").value = "";
    document.getElementById("monthly__input").value = "";
    document.getElementById("aksiya__input").value = "";
    delete document.getElementById("drawer__button").dataset.productId;
  });

function deleteProduct(id) {
  const index = products.findIndex((product) => product.id === id);
  if (index > -1) {
    products.splice(index, 1);
    renderProducts();
  }
}

elMoreProductsBtn.addEventListener("click", () => {
  pageCount++;
  renderProducts();
});

elLessProductsBtn.addEventListener("click", () => {
  if (pageCount > 1) {
    pageCount--;
    renderProducts();
  }
});

elResetBtn.addEventListener("click", () => {
  pageCount = 1;
  renderProducts();
});

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});
