const navigateTo = url => {
  history.pushState(null, null, url);
  router();
}


const router = async () => {
  const routes = [
    { path: "/", view: () => console.log("Viewing Dashboard") },
    { path: "/posts", view: () => console.log("Viewing Posts") },
    { path: "/settings", view: () => console.log("Viewing Settings") },
  ];


  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    };
  });

  let match = potentialMatches.find(match => match.isMatch);

  if(!match) {
    match = {
      route: routes[0],
      isMatch: true
    };
  }

  // Проверка:
  console.log(potentialMatches);
  console.log(match);
  match.route.view();
};


document.addEventListener("DOMContentLoaded", () => {

  document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });


  router();
});

