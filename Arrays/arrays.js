const toDoArray = [];

function addToList() {
  const toDo = document.querySelector(".input");
  const taskName = toDo.value;
  console.log(taskName);
  toDoArray.push(taskName);
  console.log(toDoArray);
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
