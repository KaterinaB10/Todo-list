import { addTask, getAllTodoes } from "./todoListAPI.js";
import { createNewTask } from "./createTodoElements.js";

// Read user input
const userInput = document.querySelector("#input-box");
const addButton = document.querySelector("#add-task-btn");

addButton.addEventListener("click", () => {
  // 1. Read text input
  console.log("Button clicked");
  const title = userInput.value;

  // 2. Validate input
  if (title === "") {
    // If the input is empty return
    alert("Please write something");
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
 * A function for updating the DOM to reflect tasks
 */
function updateDisplay() {
  // Get the updated list of all todoes
  const allTodoes = getAllTodoes();

  // Clear out the previous elements
  listContainer.innerHTML = "";

  // Go trough the list of all todoes and
  for (const todo of allTodoes) {
    // Create a new HTML element
    const newElement = createNewTask(todo);
    // Insert the new element into the DOM
    listContainer.appendChild(newElement);
  }
}
