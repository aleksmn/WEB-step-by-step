const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

function getNotes() {
  return JSON.parse(localStorage.getItem("mynotes") || "[]");
}

function saveNotes(notes) {
  localStorage.setItem("mynotes", JSON.stringify(notes));
}

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

function addNote() {}

function updateNote(id, newContent) {
  console.log("Изменяем заметку...");
  console.log(id, newContent);
}

function deleteNote(id, element) {
  console.log("Удаляем заметку...");
  console.log(id, newContent);
}
