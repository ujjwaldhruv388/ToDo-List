const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
const button = document.getElementById("btn");

function addtask() {
    if (inputbox.value.trim() === '') { // Trim the value to avoid checking for only whitespace
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "✖"; // Add content for the span element
        li.appendChild(span); // Append the span to the li element
    }
    inputbox.value = ""; 
    saveData();
}
button.addEventListener("click", addtask);

listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Corrected classlist to classList
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showtask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}

showtask();

