const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");


function getNotes() {
    return JSON.parse(localStorage.getItem("mynotes") || "[]")
}


function saveNotes(notes) {

}

function addNote() {

}


function updateNote(id, newContent) {

}


function deleteNote(id, element) {

}