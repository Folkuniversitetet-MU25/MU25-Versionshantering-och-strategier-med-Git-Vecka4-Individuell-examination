const todos = [
  { text: "Lära mig branches", done: false },
  { text: "Skapa PR och få review", done: false },
  { text: "Lösa en mergekonflikt", done: false },
];

const listEl = document.getElementById("todoList");
const addBtn = document.getElementById("addBtn");
const inputEl = document.getElementById("todoInput");

function render() {
  listEl.innerHTML = "";
  todos.forEach((t, i) => {
    const li = document.createElement("li");
    li.className = "item" + (t.done ? " done" : "");

    const label = document.createElement("span");
    label.textContent = t.text;

    const spacer = document.createElement("span");
    spacer.className = "spacer";

    const toggle = document.createElement("button");
    toggle.textContent = t.done ? "Ångra" : "Klar";
    toggle.onclick = () => {
      todos[i].done = !todos[i].done;
      render();
    };

    const del = document.createElement("button");
    del.textContent = "Ta bort";
    del.onclick = () => {
      todos.splice(i, 1);
      render();
    };

    li.append(label, spacer, toggle, del);
    listEl.appendChild(li);
  });
}

// CONFLICT-SEED: Ändra den här hjälpfunktionen i två olika branches för att skapa en konflikt.
function addTodo(text) {
  todos.unshift({ text, done: false });
}

addBtn.addEventListener("click", () => {
  const val = inputEl.value.trim();
  if (!val) return;
  addTodo(val);
  inputEl.value = "";
  render();
});

render();
