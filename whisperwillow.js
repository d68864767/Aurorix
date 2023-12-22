```javascript
// Importing utilities
const Utilities = require('./utilities');

// Whisperwillow creature class
class Whisperwillow {
    constructor() {
        this.name = 'Whisperwillow';
        this.location = 'Sacred Grove';
    }

    // Whisperwillow's action
    action() {
        if (Utilities.isDay()) {
            this.photosynthesis();
        } else if (Utilities.isTwilight()) {
            this.communicate();
        } else {
            this.rest();
        }
    }

    // Whisperwillow's photosynthesis
    photosynthesis() {
        console.log(`${this.name} is performing photosynthesis.`);
    }

    // Whisperwillow's communication
    communicate() {
        console.log(`${this.name} is communicating through rustling leaves.`);
    }

    // Whisperwillow's rest
    rest() {
        console.log(`${this.name} is resting.`);
    }
}

// Exporting the Whisperwillow class
module.exports = Whisperwillow;
```
