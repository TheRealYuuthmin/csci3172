#CSCI 3172 Lab 3 Resubmission

*Date Created: 22 March 2025
*Last modified date: 22 March 2025
*Lab URL:
https://git.cs.dal.ca/bandara/csci3172/-/tree/main/labs/lab3
https://web.cs.dal.ca/~bandara/csci3172/labs/lab3/index.html

##Author - Manuga Yuthmin Wijesundara Bandara B00944453

##Built with 
*HTML
*CSS
*JavaScript

##Sources used: 
Lines 15 - 90
function searchItems() {
    const query = document.getElementById("searchQuery").value.toLowerCase();
    if (!query) {
        alert("Please enter search parameters.");
        return;
    }

    const results = inventory.filter(item => 
        Object.values(item).some(value => value.toString().toLowerCase().includes(query))
    );

    const inventoryList = document.getElementById("inventoryList");
    inventoryList.innerHTML = results.length > 0 
        ? results.map(item => `<div class="item-card"><strong>${item.name}</strong> - ${item.type} - $${item.price} - Qty: ${item.quantity} - ${item.description}</div>`).join("")
        : "<p>No such item.</p>";
}

//Hide Search Result functionality
function hideSearchResults() {
    document.getElementById("inventoryList").innerHTML = "";
}

//Calculate total value function
function calculateTotalValue() {
    const totalValue = inventory.reduce((sum, item) => sum + item.price * item.quantity, 0);
    alert(`Total inventory value: $${totalValue}`);
}

//Apply Discount Function 
function applyDiscount() {
    const discount = parseFloat(document.getElementById("discountPercentage").value);
    if (!isNaN(discount) && discount > 0) {
        inventory.forEach(item => item.price -= (item.price * discount) / 100);
        listItems();
    } else {
        alert("Enter a valid discount percentage! (1-100%)");
    }
}

//Show Items function 
function listItems() {
    const inventoryList = document.getElementById("inventoryList");
    inventoryList.innerHTML = "";
    inventory.forEach(item => {
        let itemDiv = document.createElement("div");
        itemDiv.classList.add("item-card");
        itemDiv.innerHTML = `<strong>${item.name}</strong> - ${item.type} - $${item.price} - Qty: ${item.quantity} - ${item.description}`;
        inventoryList.appendChild(itemDiv);
    });
}

// Remove Item Function
function removeItem() {
    let nameToDelete = document.getElementById("removeItemName").value.toLowerCase();
    let indexToDelete = inventory.findIndex(item => item.name.toLowerCase() === nameToDelete);
    
    if (indexToDelete !== -1) {
        lastRemovedItem = inventory[indexToDelete];
        inventory.splice(indexToDelete, 1);
        listItems();
    } else {
        alert("Item not found.");
    }
}

//Undo remove item function
function undoRemoveItem() {
    if (lastRemovedItem) {
        inventory.push(lastRemovedItem);
        lastRemovedItem = null;
        listItems();
    } else {
        alert("No recent deletions to undo.");
    }
}


the above code was used by adapting: https://stackoverflow.com/questions/29382730/creating-a-simple-inventory-system-in-javascript

