const toDoArray = ["anfih", "akgsajh"];



addTask();
function pushToArray() {
  const toDo = document.querySelector(".input");
  const taskName = toDo.value;
  toDoArray.push(taskName);
  
  addTask();
}

function addTask() {
  let list = "";
  for (i = 0; i < toDoArray.length; i++) {
    let num = toDoArray[i];
    let html = `<p>${num}</p>`;
    
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
  addToArray();
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
