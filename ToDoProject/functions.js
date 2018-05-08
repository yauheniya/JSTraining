"use strict";

function addTodoItem(todoItem) {
    let itemToAdd = JSON.parse(JSON.stringify(todoItem));
    let uniqueID = true;
    let ids = [];

    if ((itemToAdd.text === "") || (itemToAdd.text === undefined) || (itemToAdd.text === null)) {
        message = "Text is empty";
        return false;
    };

    if ((itemToAdd.completed === undefined) || (itemToAdd.completed === "")) {
        message = "Completed status is empty";
        return false;
    };

    if ((typeof itemToAdd.id !== "number") && (typeof itemToAdd.id !== "undefined")) {
        message = "ID is not a number";
        return false;
    };

    ids = getIDs();

    ids.forEach((id, i, ids)=>{
        if (itemToAdd.id === id){
            uniqueID = false;
            return;
        }
    });

    if (uniqueID) {
        if (itemToAdd.id === undefined){
            if (ids.length === 0)
                itemToAdd.id = 1;
            else itemToAdd.id = Math.max.apply(null, ids)+1;
        }
        todoItems.push(itemToAdd);
        message = "New item added successfully";
        return true;
    } else {
        message = "ID is not unique!";
        return false;
    }

};

function getIDs () {
    let ids = [];
    for(let i=0; i < todoItems.length; i++) {
        ids.push(todoItems[i].id);
    };
    return ids;
}

function viewTodoList(itemsType) {
    let filteredItems = [];

    if (itemsType == 'all') {
        filteredItems = todoItems;
    };

    if (itemsType === 'completed' || itemsType === 'not_completed') {
        filteredItems = todoItems.filter(function (item) {
            return itemsType === 'completed' ? item.completed === true : item.completed === false
        })
    };
    return filteredItems;
};

function editTodoItem(todoItemId, newText) {
    if (newText !== "" && newText !== undefined && todoItemId !== undefined) {
        todoItems.forEach((item, i, items)=>{
            if (item.id === todoItemId) {
                item.text = newText;
                message = "Item edited successfully";
                return true;
            }
        });
    }
    else{
        message = "Editing failed";
        return false;
    };
};

function deleteTodoItem(todoItemId) {
    let result = false;
    if (todoItemId !== undefined) {
        todoItems = todoItems.filter(function(item) {
            let notDeletedItem = true;
            if (item.id === todoItemId){
                notDeletedItem = false;
                result = true;
            }
            return notDeletedItem;
        });
        return true;
    }
    else{
        return false;
    };
};

function completeTodoItem(todoItemId) {
    let result = false;
    if (todoItemId !== undefined) {
        todoItems.forEach((item, i, items)=>{
            if (item.id === todoItemId) {
                if (item.completed === true)
                    console.log("Item already completed");
                else {
                    item.completed = true;
                    result = true;
                }
            }
        });
    }
    return result;
};

