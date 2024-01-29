// Here I will creat a new HTML element that will appear from input

const template = `<div class="lists-container">
<ul id="display-task">
<il id="task">
<input id="task-complete-mark" type="checkbox" />
<h2>Title</h2>
<p>Date created</p>
<p>Date updated</p>
<button>Delete</button>
</il>
</ul>
</div>
`;

export function createTodoElement(todo) {
  // Create the initial wrapper element
  const wrapper = document.createElement("li");

  // To change whole template content into nothing
  document.body.innerHTML = "+ add new task";

  // Configure that with the content you need
  wrapper.textContent = todo.title;

  // Return the finished HTML Element
  return wrapper;
}
