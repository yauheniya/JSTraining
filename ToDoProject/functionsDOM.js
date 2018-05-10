"use strict";

function addTodoItemDom(todoItem) {
    result(addTodoItem(todoItem), showOk, showCancel);
};

function editTodoItemDom(todoItemId, newText) {
    result(editTodoItem(todoItemId, newText), showOk, showCancel);
};

function deleteTodoItemDom(todoItemId) {
    result(deleteTodoItem(todoItemId), showOk, showCancel);
};

function completeTodoItemDom(todoItemId) {
    result(completeTodoItem(todoItemId), showOk, showCancel);
};

function setMessageDom(message) {
    let msg = document.getElementById("resultMessage");
    msg.innerHTML = message;
};

function viewTodoListDom(itemsType) {
    if (itemsType === "all")
        document.getElementById("all").checked = true;

    let lisList = document.getElementById("filtered-todo-items");
    lisList.innerHTML = "";

    let filteredItems = viewTodoList(itemsType);
    if(filteredItems){
        let lis = "";
        filteredItems.forEach((todoItem, i, items)=>{
            lis += `<li>id: ${todoItem.id} <ul><li type = "circle">text: ${todoItem.text}</li> <li type = "circle">completed: ${todoItem.completed}</li></ul></li>`
        });

        lisList.innerHTML = lis;
        setMessageDom(`View ${itemsType} items`);
    }
    else {
        setMessageDom("View failed");
        return false;
    }

};

function viewALLTodoListDom() {
    let lisList = document.getElementById("todo-items");
    lisList.innerHTML = "";

    let filteredItems = viewTodoList("all");
    console.log(filteredItems);
    if(filteredItems){
        let lis = "";
        filteredItems.forEach((todoItem, i, items)=>{
            lis += `<li id="${todoItem.id}">id: ${todoItem.id} 
                    <a href="/" id="deleteList" style="margin-left: 6px">Delete</a>
                    <a href="/" id="completeList" style="margin-left: 6px">Complete</a>
                    <ul><li type = "circle">text: ${todoItem.text}</li> <li type = "circle">completed: ${todoItem.completed}</li></ul></li>`
        });

        lisList.innerHTML = lis;
    }
    else {
        setMessageDom("View failed");
        return false;
    };
};

function result(isConfirm, yes, no) {
    if (isConfirm) {
        yes();
    }
    else {
        no();
    };
};

function showOk() {
    viewALLTodoListDom();
    viewTodoListDom("all");
    setMessageDom(message);
};
function showCancel() {
    setMessageDom(message);
};