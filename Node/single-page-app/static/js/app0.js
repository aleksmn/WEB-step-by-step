console.log("Static JS loaded")

const router = async () => {
  const routes = [
    // Тестируем пути
    { path: "/", view: () => console.log("Главная страница") },
    { path: "/posts", view: () => console.log("Блог") },
    { path: "/contacts", view: () => console.log("Контакты") },

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
  
  // console.log(potentialMatches);

  // Записываем нужный путь в переменную
  let match = potentialMatches.find((match) => match.isMatch);

  

  // Если путь из адресной строки не найден, отправляем на путь "/"
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }


  console.log(match);
  


  match.route.view()



};



document.addEventListener("DOMContentLoaded", () => {

  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
    }
  });

  router();
});
