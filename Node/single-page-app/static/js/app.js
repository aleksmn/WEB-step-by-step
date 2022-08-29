import Main from "./views/Main.js";
import Posts from "./views/Posts.js";
import Contacts from "./views/Contacts.js";

console.log("Static JS loaded")

const router = async () => {
  const routes = [
    // Тестируем пути
    // { path: "/", view: () => console.log("Viewing Dashboard") },
    // { path: "/posts", view: () => console.log("Viewing Posts") },
    // { path: "/contacts", view: () => console.log("Viewing contacts") },

    { path: "/", view: Main },
    { path: "/posts", view: Posts },
    { path: "/contacts", view: Contacts },
  ];


  // Проверяем, какому из путей соответствует текущий адрес
  // в адресной строке браузера. Для совпадающего пути 
  // свойство isMatch будет равно true.
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  // Записываем нужный путь в переменную
  let match = potentialMatches.find((match) => match.isMatch);

  // Если путь из адресной строки не найден, отправляем на путь "/"
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


const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
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
