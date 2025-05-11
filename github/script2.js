function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = section.style.display === "block" ? "none" : "block";
}

function addTask(sectionKey) {
    const inputField = document.getElementById(sectionKey + "InputField");
    const errorField = document.getElementById(sectionKey + "Error");
    const taskText = inputField.value.trim();

    if (taskText === "") {
        errorField.textContent = "Add a task!";
        errorField.style.display = "block";
        return;
    }

    errorField.style.display = "none";
    const list = document.getElementById(sectionKey + "List");
    const listItem = document.createElement("li");
    listItem.innerHTML = `${taskText} <button class="remove-btn" onclick="removeTask(this)">X</button>`;
    list.appendChild(listItem);
    inputField.value = "";
}

function addMainTask() {
    const inputField = document.getElementById("mainInputField");
    const errorField = document.getElementById("mainError");
    const taskText = inputField.value.trim();

    if (taskText === "") {
        errorField.textContent = "Add a task!";
        errorField.style.display = "block";
        return;
    }

    errorField.style.display = "none";
    const list = document.getElementById("mainList");
    const listItem = document.createElement("li");
    listItem.innerHTML = `${taskText} <button class="remove-btn" onclick="removeTask(this)">X</button>`;
    list.appendChild(listItem);
    inputField.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}

// Populate default tasks on page load
document.addEventListener("DOMContentLoaded", () => {
    const defaultTasks = ["Clean the house", "Finish report", "Buy groceries"];
    const list = document.getElementById("mainList");

    defaultTasks.forEach(task => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${task} <button class="remove-btn" onclick="removeTask(this)">X</button>`;
        list.appendChild(listItem);
    });
});
