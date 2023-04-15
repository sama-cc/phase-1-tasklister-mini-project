document.addEventListener("DOMContentLoaded", () => {
  // your code here

let form = document.querySelector("#create-task-form")
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newListItem = document.createElement("li");
  const btn = document.createElement("button");
  btn.addEventListener("click", (e) => e.target.parentNode.remove());
  newListItem.textContent = `${e.target.new_task_description.value} `;
  btn.textContent = "X";
  newListItem.appendChild(btn);
  document.querySelector("#tasks").appendChild(newListItem);
  form.reset();
})



});
