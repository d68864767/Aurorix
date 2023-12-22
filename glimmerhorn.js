```javascript
// Importing utilities
const Utilities = require('./utilities');

// Glimmerhorn creature module
class Glimmerhorn {
    constructor() {
        this.name = 'Glimmerhorn';
        this.mood = 'neutral'; // Mood can be 'neutral', 'happy', 'angry'
        this.health = 100;
    }

    // Glimmerhorn's action in the game world
    action() {
        if (Utilities.isFullMoon()) {
            this.mood = 'happy';
            this.heal();
        } else if (Utilities.isDay()) {
            this.mood = 'angry';
            this.curse();
        } else {
            this.mood = 'neutral';
        }
    }

    // Glimmerhorn's healing ability
    heal() {
        console.log(`${this.name} is in a good mood and its horn glows brightly, healing its wounds.`);
        this.health = 100;
    }

    // Glimmerhorn's cursing ability
    curse() {
        console.log(`${this.name} is in a bad mood and its horn glows darkly, cursing its surroundings.`);
        // This is a placeholder. In a real game, you'd replace this with a function that affects the game world.
    }
}

// Exporting the Glimmerhorn module
module.exports = Glimmerhorn;
```
