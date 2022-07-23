// mobile menu

const burger = document.querySelector(".navbar-burger");
const navmenu = document.querySelector(".navbar-menu");

burger.addEventListener("click", () => {
  navmenu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
});

// tabs

const tabs = document.querySelectorAll(".tabs li");
const tabContents = document.querySelectorAll("#tab-content > div");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("is-active"));
    tab.classList.add("is-active");

    const target = tab.dataset.target;
    // console.log(target);

    tabContents.forEach((c) => {
      if (c.id == target) {
        c.classList.remove("is-hidden");
      } else {
        c.classList.add("is-hidden");
      }
    });
  });
});

// modal

// Functions to open and close a modal
function openModal(el) {
  el.classList.add("is-active");
}

function closeModal(el) {
  el.classList.remove("is-active");
}

function closeAllModals() {
  (document.querySelectorAll(".modal") || []).forEach((modal) => {
    closeModal(modal);
  });
}

// Add a click event on buttons to open a specific modal
(document.querySelectorAll(".js-modal-trigger") || []).forEach((trigger) => {
  const modal = trigger.dataset.target;
  const target = document.getElementById(modal);

  trigger.addEventListener("click", () => {
    openModal(target);
  });
});

// Add a click event on various child elements to close the parent modal
(
  document.querySelectorAll(
    ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
  ) || []
).forEach((close) => {
  const target = close.closest(".modal");

  close.addEventListener("click", () => {
    closeModal(target);
  });
});

// Add a keyboard event to close all modals
document.addEventListener("keydown", (event) => {
  const e = event || window.event;

  if (e.key == "Escape") {
    // Escape key
    closeAllModals();
  }
});
