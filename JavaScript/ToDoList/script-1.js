const addTaskButton = notesContainer.querySelector(".addBtn");

addTaskButton.addEventListener("click", () => addTask());

function getTasks() {
  return JSON.parse(localStorage.getItem("mytasks") || "[]");
}

function saveTasks(tasks) {
  localStorage.setItem("mytasks", JSON.stringify(tasks));
}

const close = document.getElementsByClassName("close");

// Кнопка добавления задачи
// function newElement() {
//   let li = document.createElement("li");
//   let inputValue = document.getElementById("todo-input").value;
//   let t = document.createTextNode(inputValue);

//   li.appendChild(t);

//   document.getElementById("todo-ul").appendChild(li);

//   if (inputValue == "") {
//     alert("Нужно написать задачу");
//   } else {
//     document.getElementById("todo-ul").appendChild(li);
//   }

//   document.getElementById("todo-input").value = "";

//   let span = document.createElement("span");
//   let txt = document.createTextNode("\u00D7"); // знак ×

//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (closeBtn of close) {
//     // console.log(closeBtn);

//     closeBtn.onclick = function () {
//       let div = this.parentElement;
//       div.style.display = "none";
//     };
//   }

//   addTask(inputValue);
// }

function createTaskElement(content="", checked="") {
  let li = document.createElement("li");
  let inputValue = document.getElementById("todo-input").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("todo-ul").appendChild(li);
  if (inputValue == "") {
    alert("Нужно написать задачу");
  } else {
    document.getElementById("todo-ul").appendChild(li);
  }
  document.getElementById("todo-input").value = "";
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7"); // знак ×
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (closeBtn of close) {
    // console.log(closeBtn);
    closeBtn.onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
  addTask(inputValue);
}

function addTask(content) {
  // Сохраняем задачи

  let tasks = getTasks();

  taskObject = {
    id: Math.floor(Math.random() * 100000),
    content: content,
    checked: false,
  };
  tasks.push(taskObject);
  saveTasks(tasks);
}

// Пометка "Выполнено"
let list = document.querySelector("ul");
list.addEventListener("click", function (ev) {
  if (ev.target.tagName == "LI") {
    ev.target.classList.toggle("checked");
  }
});
