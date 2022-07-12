const addTaskButton = document.querySelector(".addBtn");

addTaskButton.addEventListener("click", () => addTask());

function getTasks() {
  return JSON.parse(localStorage.getItem("mytasks") || "[]");
}

function saveTasks(tasks) {
  localStorage.setItem("mytasks", JSON.stringify(tasks));
}

function addTask(content="", isChecked=false) {
  console.log("Добавляем задачу в Local Storage");

  const tasks = getTasks();
  const taskObject = {
    id: Math.floor(Math.random() * 100000),
    content: content,
    checked: isChecked
  };

  tasks.push(taskObject);
  saveTasks(tasks);
}
