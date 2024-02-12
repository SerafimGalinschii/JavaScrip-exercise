const toDoArray = ["anfih", "akgsajh"];
let list = "";

forLoop();

function addToList(num, html,list) {
  const toDo = document.querySelector(".input");
  const taskName = toDo.value;
  console.log(taskName);
  toDoArray.push(taskName);
  console.log(toDoArray);
  forLoop(num, html,list);
}

function forLoop() {
  for (i = 0; i < toDoArray.length; i++) {
    const num = toDoArray[i];
    const html = `<p>${num}</p><br>`;
    list += html;
    console.log(list);
  }
  document.querySelector(".divclass").innerHTML = list;
}

function displayOnKey(event) {
  const toDo = document.querySelector(".input");
  const taskName = toDo.value;

  if (event.key === "Enter") {
    toDoArray.push(taskName);
    console.log(toDoArray);
  } else {
    return "Error";
  }
}

const toDoList = ["english", "sofware", "selfdevelop"];

for (index = 0; index < toDoList.length; index++) {
  const value = toDoList[index];
  console.log(value);
}

const array = [1, 2, 3];
let total = 0;

for (index = 0; index < array.length; index++) {
  num = array[index];
  total += num;
}
console.log(total);
