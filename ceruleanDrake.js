```javascript
// Importing utilities
const Utilities = require('./utilities');

// CeruleanDrake class
class CeruleanDrake {
    constructor() {
        this.name = 'Cerulean Drake';
        this.color = 'Iridescent sea-blue';
        this.mood = 'Neutral';
    }

    // Method to change the drake's mood based on its surroundings
    changeMood() {
        if (Utilities.isNearWater(this)) {
            this.mood = 'Happy';
        } else if (Utilities.isInSacredGrove(this)) {
            this.mood = 'Calm';
        } else {
            this.mood = 'Neutral';
        }
    }

    // Method to perform the drake's action
    action() {
        this.changeMood();

        if (this.mood === 'Happy') {
            console.log(`${this.name} splashes in the water, its scales shimmering.`);
        } else if (this.mood === 'Calm') {
            console.log(`${this.name} rests peacefully in the sacred grove.`);
        } else {
            console.log(`${this.name} soars through the sky, its mood reflected in the color of its scales.`);
        }
    }
}

// Exporting the CeruleanDrake class
module.exports = CeruleanDrake;
```
