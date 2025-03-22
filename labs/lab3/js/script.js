//Array containing inventory
let inventory = [
    { name: "MX Master 3S - Mouse", type: "Electronics", price: 139.99, quantity: 15, description: "An iconic mouse remastered. Feel every moment of your workflow with even more precision, tactility, and performance, thanks to Quiet Clicks and an 8,000 DPI track-on-glass sensor." },
    { name: "Skull Candy - Hesh Evo", type: "Electronics", price: 99.99, quantity: 50, description: "With powerful 40mm drivers and exceptional acoustics, Hesh Evo features audio quality that has been refined over four generations of constant improvement. The clear, rich sound rivals the most expensive headphones out there — at a price that’s surprisingly affordable." },
    { name: "NuPhy Kick75", type: "Electronics", price: 89.00, quantity: 30, description: "This is a whole new species that sails through your work and play. As the world’s first keyboard with a high-low compatible design, it delivers a seamless switch experience between high-low profile switches. The Nano and Max switches provide an exceptional typing feel with smoothness and satisfying sound. With Bluetooth and 2.4G connectivity, it maximizes work efficiency while being fully capable for gaming. You can express yourself and get things done effortlessly with Kick75." },
    { name: "YoungLa - The Midnight Collection - Hoodies", type: "Clothing", price: 55.00, quantity: 100, description: "This zip-up hoodie features a garment-washed finish for a soft, worn-in feel. The tonal branding on the chest gives it a clean, minimalistic look, while the raw-cut edges on the sleeves and pockets add a vintage-inspired touch. Perfect for layering, this hoodie blends casual comfort with timeless style" },
    { name: "Gymshark - Pumper Pants", type: "Clothing", price: 56.00, quantity: 100, description: "Waist-snatching, glute-popping, confidence-boosting leggings" },
    { name: "YoungLa - Shadow Twofer Long Sleeves", type: "Clothing", price: 42.00, quantity: 200, description: "Introducing the Shadow Twofer Long Sleeve—a unique fusion of style and texture. Crafted from soft cotton, it combines a vintage acid-washed body with cozy thermal under-sleeves for added warmth. Featuring distressed cuts on the collar and hem, this twofer delivers a bold, worn-in look that stands out." },
    { name: "Surrounded by Idiots: The Four Types of Human Behavior and How to Effectively Communicate with Each in Business (and in Life)", type: "Stationery", price: 18.00, quantity: 40, description: "You are not alone. After a disastrous meeting with a highly successful entrepreneur, who was genuinely convinced he was ‘surrounded by idiots’, communication expert and bestselling author, Thomas Erikson dedicated himself to understanding how people function and why we often struggle to connect with certain types of people." }
];

let lastRemovedItem = null;

//Search Item Functionality 
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
