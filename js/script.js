import { findElement } from "./helper.js";
import { products } from "./content.js";

const elWrapperProducts = findElement(".list__block");
const elTemplate = findElement("#template");
const elMoreProductsBtn = findElement("#more-btn");
const elLessProductsBtn = findElement("#less-btn");
const elSearchInput = findElement("#search-input");

let pageCount = 1;
const perPage = 5;
let filteredProducts = [...products]; 


function saveProductsToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(products));
}

function loadProductsFromLocalStorage() {
  const storedProducts = JSON.parse(localStorage.getItem("products"));
  if (storedProducts) {
    products.length = 0; 
    products.push(...storedProducts);
    filteredProducts = [...products]; 
  }
}

function saveFavoritesToLocalStorage() {
  const favorites = products.filter(product => product.isLiked);
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function renderProducts() {
  const start = (pageCount - 1) * perPage;
  const end = start + perPage;
  const visibleProducts = filteredProducts.slice(start, end);

  if (pageCount === 1) {
    elWrapperProducts.innerHTML = "";
  }

  visibleProducts.forEach((product) => {
    const newTemplate = elTemplate.content.cloneNode(true);
    const elImg = findElement(".list__content_img", newTemplate);
    elImg.src = product.imageSrc;
    elImg.dataset.id = product.id
    const elFavoriteBtn = findElement(".heart__btn", newTemplate);
    const elTitle = findElement(".content__list_title", newTemplate);
    elTitle.textContent = product.title;

    const elStarText = findElement(".star__text", newTemplate);
    elStarText.textContent = product.rating;

    const elCredit = findElement(".credit__list", newTemplate);
    elCredit.textContent = product.credit;

    const elPriceOld = findElement(".price__old", newTemplate);
    elPriceOld.textContent = product.oldPrice;

    const elPriceNew = findElement(".price__new", newTemplate);
    elPriceNew.textContent = product.newPrice;

    elFavoriteBtn.src = product.isLiked
      ? "./img/liked-heart.svg"
      : "./img/unliked-heart.svg";

    elFavoriteBtn.addEventListener("click", () => {
      product.isLiked = !product.isLiked;
      elFavoriteBtn.src = product.isLiked
      ? "./img/liked-heart.svg"
      : "./img/unliked-heart.svg";
      elFavoriteBtn.classList.add("liked");

      setTimeout(() => {
        elFavoriteBtn.classList.remove("liked");
      }, 600);
      saveProductsToLocalStorage();
      saveFavoritesToLocalStorage();
    });

    elWrapperProducts.appendChild(newTemplate);
  });

  

  elMoreProductsBtn.style.display = pageCount < 4? "block" : "none";
  elLessProductsBtn.style.display = pageCount > 3 ? "block" : "none";
}

function handleSearch() {
  const searchTerm = elSearchInput.value.toLowerCase();
  filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );
  pageCount = 1;
  renderProducts();
}

elSearchInput.addEventListener("input", handleSearch);

elMoreProductsBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(filteredProducts.length / perPage);
  if (pageCount < totalPages) {
    pageCount++;
    renderProducts();
  }
  
});

elLessProductsBtn.addEventListener("click", () => {
  pageCount = 1;
  renderProducts();
});

document.addEventListener("DOMContentLoaded", () => {
  loadProductsFromLocalStorage();
  renderProducts();

  document.getElementById("drawer__button").addEventListener("click", () => {
    const aksiyaPrice = document.getElementById("aksiya__input").value.trim();
    const title = document.getElementById("title__input").value.trim();
    const imgSrc = document.getElementById("img__input").value.trim();
    const price = document.getElementById("price__input").value.trim();
    const monthly = document.getElementById("monthly__input").value.trim();

    if (!title || !imgSrc || !price || !monthly || !aksiyaPrice) {
      alert("Barcha maydonlarni to'ldiring.");
      return;
    }

    if (products.some((p) => p.title === title)) {
      alert("Bu sarlavha bilan mahsulot mavjud.");
      return;
    }

    const newProduct = {
      id: products.length + 1,
      imageSrc: imgSrc,
      title: title,
      rating: "4.0 (0 ta sharh)",
      credit: monthly,
      oldPrice: price,
      newPrice: aksiyaPrice,
      imgText: "Sale",
      isLiked: false,
    };

    products.push(newProduct);
    filteredProducts = [...products]; 
    pageCount = Math.ceil(filteredProducts.length / perPage);
    renderProducts();

    document.getElementById("title__input").value = "";
    document.getElementById("img__input").value = "";
    document.getElementById("price__input").value = "";
    document.getElementById("monthly__input").value = "";
    document.getElementById("aksiya__input").value = "";

    saveProductsToLocalStorage();
  });

  document.getElementById("view-favorites").addEventListener("click", () => {
    localStorage.setItem("viewingFavorites", "true");
    window.location.href = "favorite.html";
  });

  window.addEventListener("beforeunload", () => {
    
    saveProductsToLocalStorage();
  });
});
elWrapperProducts.addEventListener("click", (event)=> {
  if (event.target.className.includes("list__content_img")) {
    const id = event.target.dataset.id
  localStorage.setItem("id",id)
  }
})
function shortenTitle(title, maxLength = 50) {
  return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
}

$(document).ready(function() {
  function renderProducts() {
    const start = (pageCount - 1) * perPage;
    const end = start + perPage;
    const visibleProducts = filteredProducts.slice(start, end);

    if (pageCount === 1) {
      elWrapperProducts.empty();
    }

    visibleProducts.forEach((product) => {
      const newTemplate = $(elTemplate.html()).clone();
      newTemplate.find(".content__list_title").text(shortenTitle(product.title)); // Qisqartirilgan sarlavha

      // Boshqa elementlar
      // ...

      elWrapperProducts.append(newTemplate);
    });

    
  }

  // Mahsulotlarni render qilish
  renderProducts();
});
