const div = document.querySelector('#country')
const Select = document.querySelector('#Select-Continent')
const input = document.getElementById('input');

async function fetchPhotos() {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      console.log(data);
      
  
      data.forEach((country) => {
        const photoElement = document.createElement("div");
        photoElement.innerHTML = `
              <div class='w-[300px] h-[350px] shadow-2xl p-[13px] rounded-[12px]'>
                  <img src=${country.flags.png} class='w-[100%] h-[180px]'>
                  <p class='text-xl font-bold'>Country:${country.name.common}</p>
                  <p class='text-xl font-bold'>City:${country.capital}</p>
                  <p class='text-xl font-bold'>Region:${country.region}</p>
                  <button id='add-to-cart' class='border py-[5px] w-full font-bold hover:bg-[#FFB75E] hover:text-white'>добавить в корзину</button>
              </div>
          `;
          div.appendChild(photoElement);
        const button = photoElement.querySelector("#add-to-cart");
        button.addEventListener("click", () => addToCard(country));
        
      });
    } catch (error) {
      console.error(error.message);
    }
  }
function addToCard(item) {
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push(item);
localStorage.setItem("cart", JSON.stringify(cart));
setTimeout(() => {
alert("Товар успешно добавлен в корзину");
}, 1000);
}

fetchPhotos();
input.addEventListener('input', () => {
    const filter = input.value.toLowerCase(); // Преобразуем ввод в нижний регистр
    data.forEach(card => {
      const region = card.getAttribute('region').toLowerCase(); // Берем регион карточки
      if (region.includes(filter)) {
        card.classList.add('visible'); // Показываем карточку
      } else {
        card.classList.remove('visible'); // Скрываем карточку
      }
    });
  });
  