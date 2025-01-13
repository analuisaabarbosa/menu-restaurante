const menu = [
  {
    id: 1,
    title: "panquecas de buttermilk",
    category: "café da manhã",
    price: 15.99,
    img: "./imgs/item-1.jpeg",
    desc: "Panquecas macias e deliciosas, perfeitas para começar o dia com energia.",
  },
  {
    id: 2,
    title: "lanche duplo",
    category: "almoço",
    price: 13.99,
    img: "./imgs/item-2.jpeg",
    desc: "Um clássico lanche americano com dois hambúrgueres suculentos e acompanhamentos.",
  },
  {
    id: 3,
    title: "milkshake godzilla",
    category: "milkshakes",
    price: 6.99,
    img: "./imgs/item-3.jpeg",
    desc: "Milkshake gigante, perfeito para os amantes de doces.",
  },
  {
    id: 4,
    title: "delícia rural",
    category: "café da manhã",
    price: 20.99,
    img: "./imgs/item-4.jpeg",
    desc: "Prato de café da manhã completo, com um toque caseiro e rústico.",
  },
  {
    id: 5,
    title: "ataque de ovos",
    category: "almoço",
    price: 22.99,
    img: "./imgs/item-5.jpeg",
    desc: "Prato especial à base de ovos, cheio de sabor e proteína.",
  },
  {
    id: 6,
    title: "sonho de oreo",
    category: "milkshakes",
    price: 18.99,
    img: "./imgs/item-6.jpeg",
    desc: "Milkshake cremoso com pedaços de Oreo, um verdadeiro sonho em forma de bebida.",
  },
  {
    id: 7,
    title: "excesso de bacon",
    category: "café da manhã",
    price: 8.99,
    img: "./imgs/item-7.jpeg",
    desc: "Prato irresistível para os amantes de bacon, perfeito para começar o dia.",
  },
  {
    id: 8,
    title: "clássico americano",
    category: "almoço",
    price: 12.99,
    img: "./imgs/item-8.jpeg",
    desc: "Um prato clássico que combina simplicidade e sabor, ideal para um almoço rápido.",
  },
  {
    id: 9,
    title: "companheiro de quarentena",
    category: "milkshakes",
    price: 16.99,
    img: "./imgs/item-9.jpeg",
    desc: "Milkshake perfeito para saborear enquanto relaxa em casa.",
  },
  {
    id: 10,
    title: "bife de bisonte",
    category: "jantar",
    price: 22.99,
    img: "./imgs/item-10.jpeg",
    desc: "Prato sofisticado e saboroso, com um delicioso bife de bisonte.",
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
              <img src=${item.img} class="photo" alt=${item.title} />
              <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
                </header>
                <p class="item-text">
                  ${item.desc}
                </p>
              </div>
            </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}