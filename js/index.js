//materialize auto-init
M.AutoInit();

var instance = document.addEventListener("DOMContentLoaded", function() {
  let options = {
    duration: 800,
    indicators: false
  };
  var elems = document.querySelectorAll(".slider");
  var instances = M.Slider.init(elems, options);
});

//menu
let menu = document.querySelector(".menu");

const menuButton = document.querySelector(".hamburger");

menuButton.addEventListener("click", function() {
  menuButton.classList.toggle("is-active");
  menu.classList.toggle("menu--open");
});
//landing page

//tabs component
{
  class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(
        `.tab-content[data-tab='${this.data}']`
      );
      this.card = new TabCard(this.itemElement);
      this.element.addEventListener("click", () => {
        this.selectTab();
      });
    }

    selectTab() {
      const tabs = document.querySelectorAll(".tab");
      Array.from(tabs).forEach(function(tab) {
        tab.classList.remove("button-selected");
      });
      this.element.classList.add("button-selected");
      this.card.selectCard();
    }
  }

  class TabCard {
    constructor(element) {
      this.element = element;
    }
    selectCard() {
      const cards = document.querySelectorAll(".tab-content");
      Array.from(cards).forEach(function(card) {
        card.classList.remove("card-selected");
      });
      this.element.classList.add("card-selected");
    }
  }

  let tabs = document.querySelectorAll(".tab");
  tabs = Array.from(tabs).map(link => new TabLink(link));
  tabs[0].selectTab();
}
//lightbox
{
  let modal = document.querySelector(".modal");

  let slide = document.querySelector(".mySlide");
  let closeM = document.querySelector(".modalX");

  function openModal(event, url) {
    modal.style.width = "100vw";
    closeM.style.display = "block";
    slide.style.backgroundImage = `url(${url})`;
    console.log(slide.style.backgroundImage);
  }

  function closeModal() {
    modal.style.width = "0vw";
  }
}

//gallery view buttons
{
  // Get the elements with class="column"
  const elements = document.querySelectorAll(".column");
  const hoverDivs = document.querySelectorAll(".column img");
  console.log(elements);
  console.log(hoverDivs);
  // Full-width images
  function one() {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.width = "100%";
    }
    Array.from(hoverDivs).forEach(function(image) {
      image.style.height = "80vh";
    });
  }

  // Two images side by side
  function two() {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.width = "50%";
    }
    Array.from(hoverDivs).forEach(function(image) {
      image.style.height = "30rem";
    });
  }

  // Four images side by side
  function four() {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.width = "25%";
    }
    Array.from(hoverDivs).forEach(function(image) {
      image.style.height = "60%";
    });
  }
}
