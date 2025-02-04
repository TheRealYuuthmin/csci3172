#CSCI 3172 Lab 3

*Date Created: 02 Feb 2025
*Last modified date:
*Lab URL:
web.cs.dal.ca/~bandara/csci3172/labs/lab3/index.html
https://git.cs.dal.ca/bandara/csci3172.git

##Author - Manuga Yuthmin Wijesundara Bandara B00944453

##Built with 
*HTML
*CSS
*JavaScript

##Sources used: 

###File: script.js
Lines 29 - 46
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

This code was adapted using the code in https://javascript.info/object as shown below: 
// Example from JavaScript.info
let user = {
  name: "John",
  age: 30
};

###File: Script.js
Lines 61 - 65
//Calculate total
function calculateTotalValue(){
    const total = inventory.reduce((sum, item) => sum + item.price* item.quantity, 0);
    document.getElementById('totalValue').textContent = `$${total.toFixed(2)}`;
}

This code was adapted using the code in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce as shown below: 

// Example from MDN Web Docs
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer));


###File: Script.js
Lines 151 - 161
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

This code was adapted by using the code in https://javascript.info/object#iteration as shown below: 

// Example from JavaScript.info
let user = {
  name: "John",
  age: 30
};

for (let key in user) {
  alert(key);  // name, age
  alert(user[key]); // John, 30
}

###Files: Script.js
Lines 76 - 125
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

This code was adapted by using https://javascript.info/modifying-document#document-fragment as shown below: 
<ul id="ul"></ul>

<script>
function getListContent() {
  let fragment = new DocumentFragment();

  for(let i=1; i<=3; i++) {
    let li = document.createElement('li');
    li.append(i);
    fragment.append(li);
  }

  return fragment;
}

ul.append(getListContent()); // (*)
</script>

Additionally, the code was adapted by using the code in https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment as shown in the code below: 

const element = document.getElementById("ul"); // assuming ul exists
const fragment = document.createDocumentFragment();
const browsers = ["Firefox", "Chrome", "Opera", "Safari"];

browsers.forEach((browser) => {
  const li = document.createElement("li");
  li.textContent = browser;
  fragment.appendChild(li);
});

element.appendChild(fragment);