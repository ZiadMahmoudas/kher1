/* navbar for activation */
let navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
    setTimeout(() => {
      link.classList.remove("active");
    }, 10000000);
  });
});
/* swiper For Elements */
new Swiper(".MYSwiper", {
  loop: true,
  slidesPerView: 3,
  centeredSlides: "true",
  pagination: {
    el:".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
new Swiper(".myswiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 0,
  grabCursor: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
/* End Swiper */

/* arrow up  */
let arrowUp = document.getElementById("arrowUP");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) arrowUp.style.display = "block";
  else arrowUp.style.display = "none";
});
arrowUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

/* nav bars */
let navbarToggler = document.querySelector(".navbar-toggler");
let myBtnIcon = document.querySelector(".navbar-toggler i");

myBtnIcon.addEventListener("click",()=>{
    myBtnIcon.classList.toggle("open")
 const isOpen = myBtnIcon.classList.contains("open");
 if (isOpen) {
      myBtnIcon.classList.replace("bi-text-right", "bi-x");
    } else {
      myBtnIcon.classList.replace("bi-x", "bi-text-right");
    }
})

/* cart Items */
const Closebtn = document.querySelector(".close"),
iconCart = document.querySelector(".icon-cart"),
addToCartButtons = document.querySelectorAll(".donate button"),
cartTotal = document.querySelector(".cart-total"), 
sidebar = document.querySelector(".cartTap"), 
listCart = document.querySelector(".listCart"),
edit = document.querySelector(".icon-cart .edit")
let totalAmount = 0;
let cartItems = [];
const Name = document.querySelectorAll(".donate p");
const Price = document.querySelectorAll(".donate span.edit1");

addToCartButtons.forEach((el) => {
    el.addEventListener("click", () => {
      const card = el.closest(".cards");
      const name = card.querySelector("h3").textContent;
      const priceText = card.querySelector(".reward h3").textContent
      const match = priceText.match(/[0-9][0-9][0-9]/)
      const price =  parseFloat(match);
        let item = {
          name: name,
          price: price ,
          quantity: 1,
        };
        const existingItem = cartItems.find(cartItem => cartItem.name === item.name); 
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartItems.push(item);
        }
        totalAmount += item.price;
        const localCounter = el.querySelector("p");
        localCounter.textContent = parseInt(localCounter.textContent) + 1;
        updateCart();
    });
});


function updateCart(){
    updateCartCount();
    showTotalPrice()
    updateCartItemList();
}

function showTotalPrice(){
    cartTotal.textContent = `${totalAmount.toFixed(1)}ر.س`;
}
function updateCartItemList(){
    listCart.innerHTML = ''; 
    cartItems.forEach((item,index) => {
        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-it");
        cartItem.innerHTML = `
            <span>(${item.quantity}x) ${item.name}</span>
            <span>${(parseFloat(item.price) * item.quantity).toFixed(1)}ر.س</span>
            <div>
                <button class="decrease btn btn-danger" data-index="${index}">-</button>
                <span>${item.quantity}</span>
                <button class=" increase btn btn-success" data-index="${index}">+</button>
            </div>
            `;
        listCart.append(cartItem);
    });
    activateIncreaseDecrease();
}
function activateIncreaseDecrease(){
    increase();
    decrease();
}
function increase(){
    document.querySelectorAll(".increase").forEach((button) => {
        button.addEventListener("click", (e) => {
            let index = e.target.dataset.index;
            cartItems[index].quantity++;
            totalAmount += cartItems[index].price;
            updateCart();
        });
    });
 }
 function decrease(){
    document.querySelectorAll(".decrease").forEach(button => {
        button.addEventListener("click", (e) => {
            let index = e.target.dataset.index;
            if (cartItems[index].quantity > 1) {
                cartItems[index].quantity--;
                totalAmount -= cartItems[index].price;
            } else {
                totalAmount -= cartItems[index].price;
                cartItems.splice(index, 1);
            }
            updateCart();
        });
    });
 }
 function updateCartCount() {
  let totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  edit.querySelector("span").textContent = totalCount;
}

function closeTab(){
    sidebar.classList.remove("genet");
}
function openTab(){
  sidebar.classList.toggle("genet");
}
Closebtn.addEventListener("click", closeTab);
iconCart.addEventListener("click",openTab);
