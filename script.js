//DEVELOPER: Brandon Tirado, IS117-002, Spring 2026
function addTask() {
    const text = document.getElementById("taskInput").value;
    const date = document.getElementById("dateInput").value;

    if (!text) return;

    const li = document.createElement("li");

    li.innerHTML = `
    <input type="checkbox" onclick="toggleComplete(this)">
    <span>${text} | ${date}</span>
  `;

    // Click to select
    li.onclick = function (e) {
        if (e.target.tagName !== "INPUT") {
            li.classList.toggle("selected");
        }
    };

    document.getElementById("todoList").appendChild(li);

    // Clear inputs
    document.getElementById("taskInput").value = "";
    document.getElementById("dateInput").value = "";
}

function toggleComplete(checkbox) {
    const li = checkbox.parentElement;
    li.classList.toggle("completed");
}

function deleteSelected() {
    const items = document.querySelectorAll("#todoList li.selected");
    items.forEach(item => item.remove());
}