```javascript
// Importing the utilities
const Utilities = require('./utilities');

// Aurorix creature class
class Aurorix {
    constructor() {
        this.name = 'Aurorix';
        this.color = 'translucent';
        this.role = 'Guardian of ancient secrets';
        this.elusiveness = Utilities.getRandomNumber(1, 10);
    }

    // Function to perform creature specific actions
    action() {
        if(Utilities.isNight()) {
            this.shimmer();
        }
    }

    // Function to make the Aurorix shimmer like the northern lights
    shimmer() {
        console.log(this.name + ' is shimmering with colors of the northern lights.');
    }

    // Function to reveal ancient secrets
    revealSecrets() {
        if(this.elusiveness < 5) {
            console.log(this.name + ' reveals an ancient secret.');
        } else {
            console.log(this.name + ' remains elusive.');
        }
    }
}

// Exporting the Aurorix class
module.exports = Aurorix;
```
