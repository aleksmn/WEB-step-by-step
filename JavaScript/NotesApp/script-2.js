const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

const COLORS = [
  "rgb(217, 215, 241)",
  "rgb(255, 253, 222)",
  "rgb(231, 251, 190)",
  "rgb(255, 203, 203)",
];
// https://colorhunt.co/palette/d9d7f1fffddee7fbbeffcbcb

// Выводим заметки на страницу
getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content, note.color);
  notesContainer.insertBefore(noteElement, addNoteButton);
});

// Кнопка добавления заметки (+)
addNoteButton.addEventListener("click", () => addNote());

function getNotes() {
  return JSON.parse(localStorage.getItem("mynotes") || "[]");
}

function saveNotes(notes) {
  localStorage.setItem("mynotes", JSON.stringify(notes));
}

function createNoteElement(id, content, color) {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.value = content;
  element.placeholder = "Новая заметка!";
  element.style.backgroundColor = COLORS[color];

  element.addEventListener("keyup", () => {
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
  const notes = getNotes();

  const noteObject = {
    id: Date.now(),
    content: "",
    color: Math.floor(Math.random() * COLORS.length),
  };

  const noteElement = createNoteElement(
    noteObject.id,
    noteObject.content,
    noteObject.color
  );
  notesContainer.insertBefore(noteElement, addNoteButton);

  notes.push(noteObject);
  saveNotes(notes);
}

function updateNote(id, newContent) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id == id)[0];

  targetNote.content = newContent;
  saveNotes(notes);
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);
  saveNotes(notes);
  notesContainer.removeChild(element);
}
