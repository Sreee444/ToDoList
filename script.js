const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const enterButton = document.getElementById("enter-button");

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && taskInput.value.trim() !== "") {
        addTask(taskInput.value.trim());
        taskInput.value = ""; // Clear the input after adding
    }
});

enterButton.addEventListener("click", function () {
    if (taskInput.value.trim() !== "") {
        addTask(taskInput.value.trim());
        taskInput.value = ""; // Clear the input after adding
    }
});

function addTask(taskText) {
    const li = document.createElement("li");
    li.classList.add("task");

    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.classList.add("priority-date");
    dateInput.addEventListener("change", setPriority);

    li.innerHTML = `
        <span>${taskText}</span>
        <div class="task-actions">
            <button class="edit-button" onclick="editTask(event)">✏️</button>
            <button class="delete-button" onclick="deleteTask(event)">🗑</button>
            <button onclick="toggleComplete(event)">✔</button>
        </div>
    `;
    li.appendChild(dateInput);
    taskList.appendChild(li);
}

function editTask(event) {
    const task = event.target.closest(".task");
    const taskText = task.querySelector("span");
    const newText = prompt("Edit your task", taskText.textContent);
    if (newText !== null && newText.trim() !== "") {
        taskText.textContent = newText.trim();
    }
}

function toggleComplete(event) {
    const task = event.target.closest(".task");
    task.classList.toggle("complete");
}

function deleteTask(event) {
    const task = event.target.closest(".task");
    task.remove();
}

function setPriority(event) {
    const task = event.target.closest(".task");
    const priorityDate = new Date(event.target.value);
    const today = new Date();

    if (priorityDate < today) {
        task.style.backgroundColor = '#f8d7da'; // Light red for overdue tasks
    } else {
        task.style.backgroundColor = '#d4edda'; // Light green for future tasks
    }
}

const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteText = document.getElementById("quote-text");
    quoteText.textContent = quotes[randomIndex];
}

generateQuote();

const darkModeToggle = document.getElementById("dark-mode-toggle");
const darkModeIcon = document.getElementById("dark-mode-icon");

darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeIcon.classList.remove("fa-sun");
        darkModeIcon.classList.add("fa-moon");
    } else {
        darkModeIcon.classList.remove("fa-moon");
        darkModeIcon.classList.add("fa-sun");
    }
});
