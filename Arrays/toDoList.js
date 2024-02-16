const toDoList = [
  {
    name: "JS Cours",
    dueDate: "16/02/2024",
  },
  {
    name: "JS Cours",
    dueDate: "18/02/2024",
  }
];

renderToDOList();
function pushToArray() {
  const inputName = document.querySelector(".nameInput");
  const name = inputName.value;
  const inputDate = document.querySelector(".dateInput");
  const dueDate = inputDate.value;

  toDoList.push({ name, dueDate });



  renderToDOList();
}

function renderToDOList() {
  let toDoListHTML = "";
  for (i = 0; i < toDoList.length; i++) {
    const toDoObject = toDoList[i];
    const { name, dueDate } = toDoObject;
    let html = `
    <p>
    ${name} ${dueDate} 
    <button onclick = "toDoList.splice(${i}, 1); renderToDOList(); ">Delete</button>
    </p>
    `;
    console.log(toDoList);
    toDoListHTML += html;
    console.log(toDoListHTML);
  }
  document.querySelector(".divclass").innerHTML = toDoListHTML;
}

function displayOnKey(event) {
  const toDo = document.querySelector(".input");
  const taskName = toDo.value;

  if (event.key === "Enter") {
    toDoList.push(taskName);
    console.log(toDoList);
  } else {
    return "Error";
  }
  renderToDOList();
}
