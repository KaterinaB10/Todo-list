/*Collection of all of variables and functions associated with Todo List*/

// The list of all of our Todoes
const todoes = [];

// A function for getting all of Todoes
export function getAllTodoes() {
  return todoes;
}

// I creating a function for adding a new todo item (task) --> data from createTaskFunction
// I have to create this function for write which things in data will be changed + adding max-length
export function addTask(title) {
  // Create our new Todo object
  const newTask = {
    id: createUniqueId(),
    title: title,
    LastUpdatedAt: new Intl.RelativeTimeFormat("en"),
  };

  // todoes.push(newTask);

  // A function for regulation quantity of items in the list
  if (todoes.length < 5) {
    todoes.push(newTask);
    console.log("Todo added:", newTask);
  } else {
    alert("You can not add more tasks. Please delete some of existed ones.");
    console.log(
      "You can not add more tasks. Please delete some of existed ones."
    );
  }
}

// Creating id of task
let currentId = 0;

function createUniqueId() {
  const newId = currentId;
  currentId++;
  return newId;
}
