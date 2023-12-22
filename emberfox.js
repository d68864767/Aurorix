```javascript
// Importing the utilities
const Utilities = require('./utilities');

// Emberfox creature module
class Emberfox {
    constructor() {
        this.name = 'Emberfox';
        this.description = 'A small, fox-like animal with fur that flickers and burns like embers. It leaves a trail of harmless sparks as it runs, and is known for its mischievous, playful nature.';
        this.mood = 'Playful';
    }

    // Emberfox specific action
    action() {
        if(Utilities.isDay()) {
            this.play();
        } else {
            this.rest();
        }
    }

    // Play action
    play() {
        console.log(`${this.name} is playing and leaving a trail of harmless sparks.`);
    }

    // Rest action
    rest() {
        console.log(`${this.name} is resting. Its fur flickers and burns like embers.`);
    }
}

// Exporting the Emberfox module
module.exports = Emberfox;
```
