```javascript
// Importing the creature modules
const Aurorix = require('./aurorix');
const Shadowflit = require('./shadowflit');
const Glimmerhorn = require('./glimmerhorn');
const Whisperwillow = require('./whisperwillow');
const Emberfox = require('./emberfox');
const SpectralSerpent = require('./spectralSerpent');
const CeruleanDrake = require('./ceruleanDrake');

// Importing utilities
const Utilities = require('./utilities');

// Creating instances of each creature
let aurorix = new Aurorix();
let shadowflit = new Shadowflit();
let glimmerhorn = new Glimmerhorn();
let whisperwillow = new Whisperwillow();
let emberfox = new Emberfox();
let spectralSerpent = new SpectralSerpent();
let ceruleanDrake = new CeruleanDrake();

// Array of all creatures
let creatures = [aurorix, shadowflit, glimmerhorn, whisperwillow, emberfox, spectralSerpent, ceruleanDrake];

// Main game loop
function gameLoop() {
    // For each creature
    for(let creature of creatures) {
        // Perform creature specific actions
        creature.action();

        // Use utilities if needed
        Utilities.someUtilityFunction();
    }

    // Continue the game loop
    setTimeout(gameLoop, 1000);
}

// Start the game loop
gameLoop();
```
