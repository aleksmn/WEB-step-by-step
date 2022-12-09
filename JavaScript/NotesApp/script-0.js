const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

function getNotes() {
  return JSON.parse(localStorage.getItem("mynotes") || "[]");
}

function saveNotes(notes) {
  localStorage.setItem("mynotes", JSON.stringify(notes));
}

// Тестирование:

testNotes = [
  { "id": 1, "content": "Привет из первой заметки!" },
  { "id": 2, "content": "Это вторая заметка" },
  { "id": 3, "content": "Третья заметка" }
]


saveNotes(testNotes)

console.log(getNotes());


function createNoteElement(id, content) {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.value = content;
  element.placeholder = "Новая заметка!";

  element.addEventListener("change", () => {
    updateNote(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    const doDelete = confirm("Удалить заметку?");

    if (doDelete) {
      deleteNote(id, element);
    }
  });

  return element;
}


function addNote() {
  console.log("Добавляем заметку...");
}

function updateNote(id, newContent) {
  console.log("Изменяем заметку...");
  console.log(id, newContent);
}

function deleteNote(id, element) {
  console.log("Удаляем заметку...");
  console.log(id);
}



// Выводим заметки на страницу
getNotes().forEach(note => {
  const noteElement = createNoteElement(note.id, note.content);
  notesContainer.insertBefore(noteElement, addNoteButton);
});

// Кнопка добавления заметки (+)
addNoteButton.addEventListener("click", () => addNote());


