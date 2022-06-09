import Main from "./views/Main.js";
import Posts from "./views/Posts.js";
import Contacts from "./views/Contacts.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    // Test:
    // { path: "/", view: () => console.log("Viewing Dashboard") },
    // { path: "/posts", view: () => console.log("Viewing Posts") },
    // { path: "/settings", view: () => console.log("Viewing Settings") },

    { path: "/", view: Main },
    { path: "/posts", view: Posts },
    { path: "/contacts", view: Contacts },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((match) => match.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  // Проверка:
  // console.log(potentialMatches);
  // console.log(match);

  const view = new match.route.view();

  document.querySelector("#app").innerHTML = await view.getHtml();

  new match.route.view();
};

// Добавляем возможность переходить по страницам через историю
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
