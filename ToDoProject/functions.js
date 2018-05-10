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

    if (itemsType === 'completed' || itemsType === 'not-completed') {
        filteredItems = todoItems.filter(function (item) {
            return itemsType === 'completed' ? item.completed === true : item.completed === false
        })
    };
    return filteredItems;
};

function editTodoItem(todoItemId, newText) {
    let flag = false;
    if (newText !== "" && newText !== undefined && todoItemId !== undefined) {
        todoItems.forEach((item, i, items)=>{
            if (item.id === todoItemId) {
                flag = true;
                item.text = newText;
                message = "Item edited successfully";
            }
        });
        if (!flag)
            message = "Editing failed";
        return true;
    }
    else{
        message = "ID should be specified";
        return false;
    };
};

function deleteTodoItem(todoItemId) {
    let result = false;
    let flag = false;
    if (todoItemId !== undefined) {
        todoItems.forEach((item, i, todoItems)=>{
            if(item.id == todoItemId) {
                flag = true;
                todoItems.splice(i, 1);
                message = "Item deleted successfully";
                result = true;
            }
        });
        if (!flag)
            message = "Deleting failed";
        return result;
    }
    else{
        message = "ID should be specified";
        return false;
    };
};

function completeTodoItem(todoItemId) {
    let result = false;
    let flag = false;
    if (todoItemId !== undefined) {
        todoItems.forEach((item, i, items)=>{
            if (item.id == todoItemId) {
                flag = true;
                if (item.completed === true)
                    message = "Item already completed";
                else {
                    item.completed = true;
                    result = true;
                    message = "Item completed successfully";
                }
            }
        });
        if (!flag)
            message = "Completing failed";
    }
    else {
        message = "ID should be specified";
    }
    return result;
};
