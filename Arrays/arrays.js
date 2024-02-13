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
  addTask();
}


