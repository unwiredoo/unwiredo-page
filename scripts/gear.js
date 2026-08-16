import { wishlist, cooltech, stores, backpack, edc, setup } from "./products.js";

const favoritesTopic = document.getElementById("favorites-topic-btn");
const storesTopic = document.getElementById("stores-topic-btn");
const cooltechTopic = document.getElementById("cooltech-topic");
const nicheTopic = document.getElementById("niche-topic-btn");

const productsContainer = document.getElementById("products-container");
const setupButton = document.getElementById("setup-option");
const edcButton = document.getElementById("edc-option");
const backpackButton = document.getElementById("backpack-option");
const storesButton = document.getElementById("stores-option");
const cooltechButton = document.getElementById("cooltech-option");
const wishlistButton = document.getElementById("wishlist-option");

const productsPageBrowser = document.getElementById("products-page-browser");
const productsPagesContainer = document.getElementById("products-page-container");
const nextBtn = document.getElementById('next-button');
const backBtn = document.getElementById('back-button');

favoritesTopic.addEventListener("click", () => {
  currentProducts = wishlist;
  currentPage = 1;
  createProducts(currentProducts);
  window.scrollTo({
            top: 1000,
            behavior: "smooth"
  });
});

storesTopic.addEventListener("click", () => {
  currentProducts = stores;
  currentPage = 1;
  createProducts(currentProducts);
  window.scrollTo({
            top: 1100,
            behavior: "smooth"
  });
});

cooltechTopic.addEventListener("click", () => {
  currentProducts = setup;
  currentPage = 1;
  createProducts(currentProducts);
  window.scrollTo({
            top: 1100,
            behavior: "smooth"
  });
});

nicheTopic.addEventListener("click", () => {
  currentProducts = cooltech;
  currentPage = 1;
  createProducts(currentProducts);
  window.scrollTo({
            top: 1100,
            behavior: "smooth"
  });
});

setupButton.addEventListener("click", () => {
  currentProducts = setup;
  currentPage = 1;
  createProducts(currentProducts);
});

edcButton.addEventListener("click", () => {
  currentProducts = edc;
  currentPage = 1;
  createProducts(currentProducts)
});

backpackButton.addEventListener("click", () => {
  currentProducts = backpack;
  currentPage = 1;
  createProducts(currentProducts);
});

storesButton.addEventListener("click", () => {
  currentProducts = stores;
  currentPage = 1;
  createProducts(currentProducts);
});

cooltechButton.addEventListener("click", () => {
  currentProducts = cooltech;
  currentPage = 1;
  createProducts(currentProducts);
})

wishlistButton.addEventListener("click", () => {
  currentProducts = wishlist;
  currentPage = 1;
  createProducts(currentProducts);
});

nextBtn.addEventListener("click", () => {
  if(currentPage < totalPages){
      currentPage++;
      createProducts(currentProducts)
      window.scrollTo({
            top: 1000,
            behavior: "smooth"
    });
  }
});

backBtn.addEventListener("click", () => {
  if(currentPage > 1){
    currentPage--;
      createProducts(currentProducts)
      window.scrollTo({
            top: 1000,
            behavior: "smooth"
    });
  }
});


let currentProducts = setup;
let currentPage = 1;
let totalPages = 0;
const productsPerPage = 8;


function createProducts(products) {
  productsContainer.innerHTML = "";
  productsPagesContainer.innerHTML = "";

  let pagesHtml = "";
  const start = (currentPage - 1)* productsPerPage;
  const end = start + productsPerPage;
  const pageProducts = products.slice(start,end);
  totalPages = Math.ceil(products.length / productsPerPage);

  for(let page=1; page <= totalPages; page++){
    if(totalPages === 1){
      productsPageBrowser.style.display = "none";
      pagesHtml="";
    }else{
      productsPageBrowser.style.display = "flex";
      pagesHtml+= `<button class="products-page">${page}</button>`
    }
  }
  
  
  let html = "";
  
  for(const product of pageProducts){
    html+= `
    <div class="product-box">
    <div class="product-image" style="background-image: url(${product.image});">
    <a class="see-more-container" target="_blank" href="${product.articleLink}">see more <div class="see-more-icon"></div></a>
    </div>
    
    <div class="product-info">
    <div class="product-title">
    <div class="product-title-container">
    <h2>${product.title}</h2>
    </div>
    </div>
    
    <div class="product-details">
    <p>${product.description}</p>
    </div>
    
    <div class="product-actions">
    <div class="product-actions-container">
    <p class="product-price">${product.price}</p>
    <a class="product-link" target="_blank" href="${product.buyLink}">${product.function} <div class="shop-icon"></div></a>
    </div>
    </div>
    </div>
    </div>
    
    `
  }
  
  productsContainer.innerHTML = html;
  productsPagesContainer.innerHTML = pagesHtml;
  const pageButtons = document.querySelectorAll('.products-page');

  pageButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      currentPage = index + 1;
      createProducts(currentProducts);

      window.scrollTo({
            top: 1000,
            behavior: "smooth"
      });
    })
  })
}

createProducts(currentProducts);


