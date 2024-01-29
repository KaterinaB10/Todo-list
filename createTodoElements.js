// Here I will creat a new HTML element that will appear from input

const template = `<li id="task">
                <div class="first-row">
                  <input id="task-complete-mark" type="checkbox" />
                  <h2>Title</h2>
                  <button>Delete</button>
                </div>
                <div class="second-row">
                  <p>Date created</p>
                  <p>Date updated</p>
                </div>
              </li>
`;

export function createNewTask(task) {
  const wrapper = document.createElement("li");

  wrapper.innerHTML = template;

  const title = wrapper.querySelector("h2");
  title.textContent = task.title;

  // const subtitle = wrapper.querySelector("p");
  // subtitle.textContent = task.body; - I have to find how to add date

  return articleCard;
}
