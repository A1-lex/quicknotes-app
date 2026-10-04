// ---------- Select elements ----------
const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const noteCategory = document.querySelector("#note-category");
const notesList = document.querySelector("#notes-list");

// ---------- Data ----------
let notes = [];
let nextId = 1;

// ---------- Render ----------
function render() {
  notesList.textContent = "";

  for (const note of notes) {
    const li = document.createElement("li");
    li.classList.add("note", `category-${note.category}`);

    const text = document.createElement("p");
    text.classList.add("note-text");
    text.textContent = note.text;

    const meta = document.createElement("div");
    meta.classList.add("note-meta");

    const label = document.createElement("span");
    label.classList.add("category-label");
    label.textContent = note.category;

    const date = document.createElement("span");
    date.classList.add("note-date");
    date.textContent = note.createdAt;

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    deleteBtn.dataset.id = note.id;

    meta.append(label, date, deleteBtn);
    li.append(text, meta);
    notesList.append(li);
  }
}

// ---------- Add a note ----------
noteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const note = {
    id: nextId++,
    text: noteInput.value.trim(),
    category: noteCategory.value,
    createdAt: new Date().toLocaleString(),
  };

  notes.push(note);
  render();

  noteInput.value = "";
  noteInput.focus();
});

// ---------- Initial render ----------
render();
