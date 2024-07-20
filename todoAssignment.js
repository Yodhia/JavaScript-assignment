let todos = []

  function addTodo(todos, name, urgency) {
    const newTodo = {
        id: todos.length +1,
        name: name,
        urgency: urgency
      }
      todos.push(newTodo);
  }

function updateTodo(todos, id, name, urgency){
    let record = null;
    for (let t of todos){
       if(t.id == id){
         t.name = name;
         t.urgency = urgency;
       }
    }
}
function deleteTodo(todos, id){
  const index = todos.findIndex(function(t){
    return t.id === id={;}
  })
  todos.splice(index,1)
}
addTodo(todos, "Prepare the Spice Paste", 3);

addTodo(todos, "Prepare the Toppings", 1)
console.log(todos)

updateTodo(todos,1, "Cook the Chicken", 3);
console.log(todos)
  
updateTodo(todos,1, "Prepare the Spice Paste", 3);
console.log(todos)

deleteTodo(todos,2)
console.log(todos)