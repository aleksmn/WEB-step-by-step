// Шаг 0. Добавляем товары в корзину


const addToCartButtons = document.querySelectorAll(".shop-item-button");
// console.log(addToCartButtons)


for (let b of addToCartButtons) {
    b.addEventListener("click", addToCartClicked)
}

function addToCartClicked(event) {
    const shopItem = event.target.parentElement.parentElement;
    const title = shopItem.querySelector('.shop-item-title').innerText;
    const price = shopItem.querySelector('.shop-item-price').innerText;
    const imageSrc = shopItem.querySelector('.shop-item-image').src;

    // console.log(shopItem);
    // console.log(title, price, imageSrc);

    addItemToCart(title, price, imageSrc);
}



function addItemToCart(title, price, imageSrc) {
    console.log("Добавляем товар:", title, price, imageSrc);
    updateCartTotal();

    const cartItems = document.querySelector('.cart-items');
    const cartRow = document.createElement('div');
    cartItems.appendChild(cartRow);
    cartRow.classList.add('cart-row');
    cartRow.innerHTML = 'Новая строка';

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
    cartRow.querySelector('.btn-danger').addEventListener('click', removeCartItem)
    cartRow.querySelector('.cart-quantity-input').addEventListener('change', quantityChanged)



}

function updateCartTotal() {
    // console.log("Обновляем итоговую сумму.");
}

function removeCartItem() {
    console.log("Удаляем элемент.");
}

function quantityChanged() {
    console.log("Меняем количество товаров.");
}