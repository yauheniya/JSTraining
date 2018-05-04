let todoItems = [];

let newItem = {
    text : "text text",
    completed : false,
    id : 5
};
let newItem1 = {
    text : "text text",
    completed : true
};

/*var itemsHistory = [];

var initItemsHistory = function() {
    $.getJSON( "todos.json", function(data) {
        console.log(data);
        itemsHistory = data.data;
    });
};

initItemsHistory();*/


addTodoItem(newItem1); // New item added successfully with id = 1
addTodoItem(newItem); // New item added successfully
addTodoItem(newItem); // ID is not unique!
addTodoItem(newItem1); // New item added successfully with id = 6
addTodoItem( {completed:true, id:2} ); // Text is empty
addTodoItem( {text:"", completed:true, id:3} ); // Text is empty
addTodoItem( {text:"text", id:2} ); // Completed status is empty
addTodoItem( {text:"text", completed:"", id:3} ); // Completed status is empty

console.log(`Edit - ${editTodoItem(5, "newText")}`); //Edit true
console.log(`Edit - ${editTodoItem("newText")}`); //Edit false
console.log(`Edit - ${editTodoItem(5, "")}`); //Edit false
console.log(`Edit - ${editTodoItem(5)}`); //Edit false
console.log(`Edit - ${editTodoItem(5555, "newText")}`); //Edit false

console.log("Completed Items:");
console.log(viewTodoList("completed"));

console.log(`Complete - ${completeTodoItem(5)}`); //Complete true
console.log(`Complete - ${completeTodoItem(1)}`); //Complete false, Item already completed
console.log(`Complete - ${completeTodoItem(555)}`); //Complete false
console.log(`Complete - ${completeTodoItem()}`); //Complete false

console.log(`\nAll items`);
console.log(todoItems);

console.log(`Delete - ${deleteTodoItem(5)}`); //Delete true
console.log(`Delete - ${deleteTodoItem(555)}`); //Delete false
console.log(`Delete - ${deleteTodoItem()}`); //Delete false

console.log(`\nAll items`);
console.log(todoItems);



