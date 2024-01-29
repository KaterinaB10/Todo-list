// Here I will creat a new HTML element that will appear from input

const template = `<li id="task">
                  <h2>Title</h2>
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
