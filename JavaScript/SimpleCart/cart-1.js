const addToCartButtons = document.querySelectorAll(".shop-item-button");


// for ... of


for (let b of addToCartButtons) {
    b.addEventListener("click", addToCartClicked)
}


function addToCartClicked() {

    const shopItem = this.parentElement.parentElement;
    const title = shopItem.querySelector('.shop-item-title').innerText;
    const price = shopItem.querySelector('.shop-item-price').innerText;
    const imageSrc = shopItem.querySelector('.shop-item-image').src;

    console.log(title, price, imageSrc);

    addItemToCart(title, price, imageSrc);
}


function addItemToCart(title, price, imageSrc) {
    console.log("Добавляем товар:", title, price, imageSrc);

    const cartItems = document.querySelector('.cart-items');
    const cartRow = document.createElement('div');
    cartItems.appendChild(cartRow);
    cartRow.classList.add('cart-row');

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
    cartRow.querySelector('.btn-danger').addEventListener('click', removeCartItem);
    cartRow.querySelector('.cart-quantity-input').addEventListener('change', quantityChanged);

    updateCartTotal();
}



function removeCartItem(event) {
    console.log("Удаляем элемент.");

    updateCartTotal();
}



function quantityChanged(event) {
    console.log("Меняем количество товаров.");

    updateCartTotal();
}



function updateCartTotal() {
    console.log("Обновляем итоговую сумму.");
}