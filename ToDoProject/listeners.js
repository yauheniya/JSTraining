let filterOptions = document.getElementById("filter-options");
filterOptions.addEventListener("click", (event)=>{
    if (event.target.id) {
        if (event.target.id !== "filter-options")
            viewTodoListDom(event.target.id);
    };
});

let lisList = document.getElementById("todo-items");
lisList.addEventListener("click", listHandler);
function listHandler(event) {
    if (event.target.id === "deleteList") {
        deleteTodoItemDom(event.target.parentElement.id);
    }
    else if (event.target.id === "completeList") {
        completeTodoItemDom(event.target.parentElement.id);
    }
};

let addTodoButton = document.getElementById("addButton");
addTodoButton.addEventListener("click", (event)=>{
    let newItem = getTodoItemFromDOM();
    addTodoItemDom(newItem);
});

let editTodoButton = document.getElementById("editButton");
editTodoButton.addEventListener("click", (event)=>{
    let newItem = getTodoItemFromDOM();
    editTodoItemDom(newItem.id, newItem.text);
});

let completeTodoButton = document.getElementById("completeButton");
completeTodoButton.addEventListener("click", (event)=>{
    let newItem = getTodoItemFromDOM();
    completeTodoItemDom(newItem.id);
});

let deleteTodoButton = document.getElementById("deleteButton");
deleteTodoButton.addEventListener("click", (event)=>{
    let newItem = getTodoItemFromDOM();
    deleteTodoItemDom(newItem.id);
});

function getTodoItemFromDOM() {
    let newItem = {
        text : document.getElementById("inputText").value,
        completed : document.getElementById("checkboxCompleted").checked,
        id : checkIdDOM()
    };
    return newItem;
};

function checkIdDOM() {
    if (document.getElementById("inputID").value.length === 0)
        return undefined;
    else return parseInt(document.getElementById("inputID").value) ? parseInt(document.getElementById("inputID").value) : "string";
}
