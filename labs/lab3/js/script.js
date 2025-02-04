//Array to store the inventory 
let inventory = [];

//List items
function listItems(){
    const inventoryList = document.getElementById('inventoryList');

    //code fragment
    const fragment = document.createDocumentFragment();

    inventory.forEach(item =>{
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = `
      <strong>${item.name}</strong> (${item.type})<br>
      Price: $${item.price}, Quantity: ${item.quantity}<br>
      Description: ${item.description}<br>
      <button onclick="removeItem('${item.name}')">Remove</button>
      `;

      fragment.appendChild(itemDiv);
    });

    //clear container and append fragment
    inventoryList.innerHTML ='';
    inventoryList.appendChild(fragment);
}

//Add item 
function addItem(){
    const name = document.getElementById('itemName').value;
    const type = document.getElementById('itemType').value;
    const price = parseFloat(document.getElementById('itemPrice').value);
    const quantity = parseInt(document.getElementById('itemQuantity').value);
    const description = document.getElementById('itemDescription').value;

    if (name && type && price && quantity && description){
        const newItem = {name, type, price, quantity, description};
        inventory.push(newItem);
        listItems();
        calculateTotalValue;
        clearInputs;
    }else{
        alert('Please fill in all fields.');
    }
}


//Get item by name
function getItem(itemName){
    return inventory.find(item => item.name === itemName);
}

//Remove item
function removeItem(itemName){
    inventory = inventory.filter(item => item.name !== itemName);
    listItems;
    calculateTotalValue;
}

//Calculate total
function calculateTotalValue(){
    const total = inventory.reduce((sum, item) => sum + item.price* item.quantity, 0);
    document.getElementById('totalValue').textContent = `$${total.toFixed(2)}`;
}

//Clear inputs
function clearInputs(){
    document.getElementById('itemName').value = '';
    document.getElementById('itemType').value = '';
    document.getElementById('itemPrice').value = '';
    document.getElementById('itemQuantity').value = '';
    document.getElementById('itemDescription').value = '';
}

//Search item
function searchItems(){
    const searchInput = document.getElementById('searchQuery');
    if (!searchInput){
        console.error('Search item not found.');
        alert('Search item not found');
        return;
    }

    const query = searchInput.value.trim().toLowerCase();
    if (!query){
        listItems(); //if the query is empty
        return;
    }

    const filteredItems = inventory.filter(item =>
        item.name.toLowerCase().includes(query) || item.type.toLowerCase().includes(query)
    );

    const inventoryList = document.getElementById('inventoryList');
    if (!inventoryList){
        console.error('Inventory List not found.');
        alert('Inventory List not found.');
        return;
    }

    //Minimizing DOM reflows 
    const fragment = document.createDocumentFragment();

    filteredItems.forEach(item => {
        if (!item.name || !item.type || !item.price || !item.quantity || !item.description){
            console.warn('Invalid Item: ', item);
            return; //Skip invalid items
        }

        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = `
            <strong>${item.name}</strong> (${item.type})<br>
            Price: $${item.price}, Quantity: ${item.quantity}<br>
            Description: ${item.description}<br>
            <button onclick="removeItem('${item.name}')">Remove</button>
        `;
        fragment.appendChild(itemDiv);
    });

    //Clear the container 
    inventoryList.innerHTML = '';
    inventoryList.appendChild(fragment);
}

//Bonus functions 
function applyDiscount(discountPercentage){
    inventory.forEach(item => {
        item.price = item.price * (1 - discountPercentage/100);
    });
    listItems();
    calculateTotalValue();
}

function findDuplicates(){
    const duplicates = [];
    const found = new Set();

    inventory.forEach(item => {
        if (found.has(item.name)){
            duplicates.push(item);
        } else{
            found.add(item.name);
        }
    });

    console.log(duplicates);
}

function groupByCategory(){
    const grouped = inventory.reduce((acc,item) => {
        if (!acc[item.type]){
            acc[item.type] = [];
        }
        acc[item.type].push(item);
        return acc;
    }, {});

    console.log(grouped);
}