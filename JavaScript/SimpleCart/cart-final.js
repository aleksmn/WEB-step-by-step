const addToCartButtons = document.querySelectorAll(".shop-item-button");
// console.log(addToCartButtons)

for (let b of addToCartButtons) {
  b.addEventListener("click", addToCartClicked);
}

function addToCartClicked(event) {
  const shopItem = event.target.parentElement.parentElement;
  const title = shopItem.querySelector(".shop-item-title").innerText;
  const price = shopItem.querySelector(".shop-item-price").innerText;
  const imageSrc = shopItem.querySelector(".shop-item-image").src;

  // console.log(shopItem);
  // console.log(title, price, imageSrc);

  addItemToCart(title, price, imageSrc);
}

function addItemToCart(title, price, imageSrc) {
  // console.log("Добавляем товар:", title, price, imageSrc);

  const cartItems = document.querySelector(".cart-items");
  // console.log(cartItems);


  // Проверяем, есть ли такой товар в корзине
  const cartItemNames = cartItems.querySelectorAll(".cart-item-title");

  // console.log(cartItemNames)

  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("Этот товар уже в корзине!");
      return;
    }
  }
  const cartRow = document.createElement("div");
  cartItems.appendChild(cartRow);
  cartRow.classList.add("cart-row");
  cartRow.innerHTML = "Новая строка";

  let cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">Удалить</button>
        </div>`;

  cartRow.innerHTML = cartRowContents;

  // Добавить event listeners
  cartRow
    .querySelector(".btn-danger")
    .addEventListener("click", removeCartItem);
  cartRow
    .querySelector(".cart-quantity-input")
    .addEventListener("change", quantityChanged);

  updateCartTotal();
}

function removeCartItem(event) {
  // console.log("Удаляем элемент.");
  // console.log(event.target.parentElement.parentElement)
  event.target.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  // console.log("Меняем количество товаров.");

  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function updateCartTotal() {
  // console.log("Обновляем итоговую сумму.");

  const cartRows = document.querySelectorAll(".cart-items .cart-row");

  let total = 0;

  for (row of cartRows) {
    // console.log(row);
    let priceElement = row.querySelector(".cart-price");
    let quantityElement = row.querySelector(".cart-quantity-input");
    // console.log(priceElement, quantityElement);
    let price = parseFloat(priceElement.innerText.replace("руб.", ""));
    let quantity = parseInt(quantityElement.value);
    total = total + price * quantity;
    // console.log(total);
  }

  total = Math.round(total * 100) / 100;
  document.querySelector(".cart-total-price").innerText = total + " руб.";
}

// Кнопка "Купить"

const buyBtn = document.querySelector(".btn-purchase");

buyBtn.addEventListener("click", purchaseClicked);

function purchaseClicked() {
  alert("Спасибо за покупку!");
  let cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}
