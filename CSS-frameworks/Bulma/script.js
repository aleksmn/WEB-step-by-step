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
      }
      else {
        c.classList.add("is-hidden");
      }
    })
  })
})
