import { addTask, getAllTodoes } from "./todoListAPI.js";
import * as createTodoElements from "./createTodoElements.js";

// Read user input
const userInput = document.querySelector("#input-box");
const addButton = document.querySelector("#add-task-btn");

addButton.addEventListener("click", () => {
  // 1. Read text input
  const title = userInput.value;

  // 2. Validate input
  if (title === "") {
    // If the input is empty return
    alert("Please write something");
  }

  // 3. Create new todo
  createTodoElements.createTodoElement(title);

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
  listContainer.innerHTML = userInput.value;

  // Go trough the list of all todoes and
  for (const todo of allTodoes) {
    // Create a new HTML element
    const newElement = createTodoElements.createTodoElement(todo);
    // Insert the new element into the DOM
    listContainer.appendChild(ul);
  }
}
