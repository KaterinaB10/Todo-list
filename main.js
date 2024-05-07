//Importing functions from other documents
import { createNewTask } from "./1-createTaskFunction.js";
import { addTask, getAllTodoes } from "./2-todoAPI.js";

// Read user input
const userInput = document.querySelector("#input-box");
const addButton = document.querySelector("#add-task-btn");
const deleteBtn = document.querySelectorAll(".deleteBtn");
const checkbox = document.querySelectorAll(".checkbox");

addButton.addEventListener("click", () => {
  // 1. Read text input
  console.log("Button clicked");
  const title = userInput.value;

  // 2. Validate input
  if (title === "") {
    // If the input is empty return
    alert("Please write something.");
  }

  // 3. Create new todo
  else addTask(title);

  // 4. Update the DOM
  updateDisplay();

  // 5. Clear the input field
  userInput.value = "";
});

// Updating the DOM
const listContainer = document.querySelector("#display-task");

/**
 * A function for updating the DOM to reflect tasks - this function is used in addButton.addEventListener
 */
function updateDisplay() {
  // Get the updated list of all todoes
  const allTodoes = getAllTodoes();

  // Clear out the previous elements
  listContainer.innerHTML = "";

  // Go trough the list of all todoes and
  for (const data of allTodoes) {
    // Create a new HTML element
    const newElement = createNewTask(data);
    // Insert the new element into the DOM
    listContainer.appendChild(newElement);
  }
}

/**
 * A function for deleting tasks
 */

// deleteBtn.addEventListener("click", () => {
//   userInput.this.remove();
//   updateDisplay();
// });

// checkbox.addEventListener("click", () => {
//   newElement.classList.add(".taskLabelClicked");
//   updateDisplay();
// });
