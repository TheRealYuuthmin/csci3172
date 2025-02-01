// In this example, I want to create an interactive form that allows Newt Scamander create a sort of inventory of the Fantastic Beasts he's rescuing
// Here's what we'll need to do:
// 1. Grab the input a user enters into our form
// 2. Represent this input in a meaningful way, let's say an Object
// 3. Push the contents of that Object into an Array 
// 4. Reset our form so that the user can add a new creature if they want without having to manually delete the previous input
// 5. Display the new creature in our Array back to the user on our page

//1. Grab user entries into the form 
document.addEventListener('DOMContentLoaded', () => {
    const addCreatureForm = document.getElementById('addCreatureForm');
    const creatureSanctuary = document.getElementById('creatureSanctuary');

    let creatures = [];

    //form submission 
    addCreatureForm.addEventListener('submit', function(event) {
        event.preventDefault(); //prevent the form from submitting and refreshing the page 

        //Get input values from hte form
        const creatureName = document.getElementById('creatureName').value;
        const creatureType = document.getElementById('creatureType').value;
        const creatureHabitat = document.getElementById('creatureHabitat').value;
        const creatureImage = document.getElementById('creatureImage').value;

        //2. Represents the input in a meaningful way: an object
        const newCreature = {
            name: creatureName,
            type: creatureType,
            habitat: creatureHabitat,
            image: creatureImage
        };

        //3. Push the creature into an array 
        creatures.push(newCreature);

        //4. Reset the form
        addCreatureForm.reset();

        //5. Display creatures in the array onto the web page 
        displayCreatures();
    });

    //Function to display the creatures 
    function displayCreatures(){
        creatureSanctuary.innerHTML = ''; //clears hte previous entries

        creatures.forEach((creature, index) => {
            const creatureDiv = document.createElement('div'); //Div for creatures 
            creatureDiv.classList.add('creature'); //Add creature class to div

            //Displays creature
            creatureDiv.innerHTML = ` 
                <h3>${creature.name}</h3> 
                <p><strong>Type:</strong> ${creature.type}</p>
                <p><strong>Habitat:</strong> ${creature.habitat}</p>
                ${creature.image ? `<img src="${creature.image}" alt="${creature.name}" class="img-fluid">` : ''}
                <hr>
            `;

            creatureSanctuary.appendChild(creatureDiv); //adds new creature to sanctuary
        });
    };
});