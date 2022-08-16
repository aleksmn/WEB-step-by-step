const addTaskButton = document.querySelector(".addBtn");

// addTaskButton.addEventListener("click", () => addTask());

function getTasks() {
  return JSON.parse(localStorage.getItem("mytasks") || "[]");
}

function saveTasks(tasks) {
  localStorage.setItem("mytasks", JSON.stringify(tasks));
}

function addTask(content = "", isChecked = false) {
  console.log("Добавляем задачу в Local Storage");

  const tasks = getTasks();
  const taskObject = {
    content: content,
    checked: isChecked,
  };

  tasks.push(taskObject);
  saveTasks(tasks);
}

// Кнопка добавления задачи
document.querySelector(".addBtn").onclick = function () {
  let li = document.createElement("li");
  let inputValue = document.getElementById("todo-input").value;
  let t = document.createTextNode(inputValue);

  li.appendChild(t);

  if (inputValue == "") {
    alert("Нужно написать задачу");
    return;
  } else {
    document.getElementById("todo-ul").appendChild(li);
    addTask(inputValue);
    addCloseBtn(li);
    addCheckedToggle(li);
  }

  document.getElementById("todo-input").value = "";
};

// Выводим задачи на экран
getTasks().forEach((task) => {
  console.log(task.content);
  li = document.createElement("li");
  li.innerText = task.content;
  document.getElementById("todo-ul").appendChild(li);
  addCloseBtn(li);
  addCheckedToggle(li);

  if (task.checked) {
    li.classList.add("checked");
  }
});

// Добавляем кнопку "закрыть"
function addCloseBtn(li) {
  const closeBtn = document.createElement("span");
  closeBtn.innerText = "×";
  closeBtn.className = "close";

  li.appendChild(closeBtn);

  closeBtn.onclick = function (event) {
    event.target.parentElement.remove();

    // console.log(li.firstChild.textContent);
    const taskContent = li.firstChild.textContent;
    const tasks = getTasks().filter((task) => task.content != taskContent);
    // console.log(tasks);
    saveTasks(tasks);
  };
}

// Пометка "Выполнено"

function addCheckedToggle(li) {
  li.addEventListener("click", function (event) {
    event.target.classList.toggle("checked");

    const taskContent = li.firstChild.textContent;
    const tasks = getTasks();
    for (t of tasks) {
      if (t.content == taskContent) {
        t.checked = !t.checked;
      }
    }
    saveTasks(tasks);
  });
}
