let todoItems = [];

let message = "";

let newItem = {
    text : "text text",
    completed : false,
    id : 8
};
let newItem1 = {
    text : "text text",
    completed : true
};

let initItemsHistory = function() {
    $.ajax({
        dataType: "json",
        url: 'todos.json',
        async: false,
        success: function(data) {
            data.data.forEach((item, i, arr)=>{
                todoItems.push(item);
            });
        }
    });
};

initItemsHistory();

addTodoItemDom(newItem1); // New item added successfully with id = 1
addTodoItemDom(newItem); // New item added successfully
addTodoItemDom(newItem); // ID is not unique!
addTodoItemDom(newItem1); // New item added successfully with id = 6
addTodoItemDom( {completed:true, id:2} ); // Text is empty
addTodoItemDom( {text:"", completed:true, id:3} ); // Text is empty
addTodoItemDom( {text:"text", id:2} ); // Completed status is empty
addTodoItemDom( {text:"text", completed:"", id:3} ); // Completed status is empty

editTodoItemDom(5, "newText"); //Edit true
editTodoItemDom("newText"); //Edit false
editTodoItemDom(5, ""); //Edit false
editTodoItemDom(5); //Edit false
editTodoItemDom(5555, "newText"); //Edit false

viewTodoListDom("completed");
viewTodoListDom("not_completed");
viewTodoListDom("all");

/*
completeTodoItemDom(5); //Complete true
completeTodoItemDom(1); //Complete false, Item already completed
completeTodoItemDom(555); //Complete false
completeTodoItemDom(); //Complete false
*/

deleteTodoItemDom(5); //Delete true
deleteTodoItemDom(555); //Delete false
deleteTodoItemDom(); //Delete false





