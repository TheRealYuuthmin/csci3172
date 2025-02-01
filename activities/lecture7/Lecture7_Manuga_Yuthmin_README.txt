#CSCI 3172 lecture 7 Activity 

*Date created: 28 Jan 2025
*Last Modification: 01 Feb 2025
*Lab URL: 
web.cs.dal.ca/~bandara/csci3172/activities/lecture7/index.html
https://git.cs.dal.ca/bandara/csci3172.git

## Author - Manuga Yuthmin Wijesundara Bandara B00944453
##Built with 
*HTML
*CSS
*JavaScript

##Sources used

###script.js Lines 10 - 64
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

###Adapted using 
*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit


