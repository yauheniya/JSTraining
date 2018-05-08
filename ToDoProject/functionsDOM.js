"use strict";

function addTodoItemDom(todoItem) {
    if (addTodoItem(todoItem)){
        viewTodoListDom("all");
        setMessageDom(message);
        return true;
    }
    else {
        setMessageDom(message);
        return false;
    }
};

function editTodoItemDom(todoItemId, newText) {
    if(editTodoItem(todoItemId, newText)){
        viewTodoListDom("all");
        setMessageDom(message);
        return true;
    }
    else {
        setMessageDom(message);
        return false;
    }
};

function deleteTodoItemDom(todoItemId) {
    if(deleteTodoItem(todoItemId)){
        viewTodoListDom("all");
        setMessageDom("Item deleted successfully");
    }
    else {
        setMessageDom("Deleted successfully");
        return false;
    }
};

function setMessageDom(message) {
    let msg = document.getElementById("resultMessage");
    msg.innerHTML = message;
};

function viewTodoListDom(itemsType) {
    setMessageDom(`View ${itemsType} items`);
    let lisList = document.getElementById("todo-items");
    lisList.innerHTML = "";

    let lis = "";
    let filteredItems = viewTodoList(itemsType);
    filteredItems.forEach((todoItem, i, items)=>{
        lis += `<li>id: ${todoItem.id} <ul><li type = "circle">text: ${todoItem.text}</li> <li type = "circle">completed: ${todoItem.completed}</li></ul></li>`
    });

    lisList.innerHTML = lis;
};