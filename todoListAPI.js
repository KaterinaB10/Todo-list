/**
 * Inside this Module we collect all of our variables
 * and functions associated with our Todo List
 */

// The list of all of our Todoes
const todoes = [];

// A function for getting all of our Todoes
export function getAllTodoes() {
  return todoes;
}

// A function for adding a new todo item
export function addTask(title) {
  // Create our new Todo object
  const newTask = {
    id: createUniqueId(),
    title: title,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  // A function for regulation quantity of items in the list
  // if (todoes.length < 10) {
  //   todoes.push(newTodo);
  //   console.log("Todo added:", newTodo);
  // } else {
  //   console.log(
  //     "You can not add more tasks. Please delete some of existed ones."
  //   );
  // } - I need to check it
}

// Creating id of task

let currentId = 0;

function createUniqueId() {
  const newId = currentId;
  currentId++;
  return newId;
}
