const cartContainer = document.querySelector("#cart");

function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML =
      "<h1 class='flex justify-center items-center h-[200px] text-4xl font-bold'>Ваша корзина пуста</h1>";
  }

  console.log(cart);
  cart.forEach((item, index) => {
    const cartRow = document.createElement("div");
    cartRow.innerHTML = `
            <div class='border-2 border-[#ccc] flex justify-between items-center gap-[30px] p-3'>
            <div class='flex gap-[30px] items-center'>
            <img src=${item.flags.png} class='w-[100px]'>
            <p class='text-xl font-bold'>${item.name.common}</p>
            </div>
                <button id='remove-item' data-index="${index}" class='text-3xl font-bold'>x</button>
            </div>
        `;
    cartContainer.appendChild(cartRow);
  });

  const removeBtn = document.querySelectorAll("#remove-item");
  removeBtn.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      const index = event.target.getAttribute("data-index"); 
        removeItem(index);
    })
  );
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

loadCart();