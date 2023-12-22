```javascript
// Utilities module

// Function to generate a random number within a range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to check if it's day or night
function isDay() {
    let currentHour = new Date().getHours();
    return currentHour > 6 && currentHour < 18;
}

// Function to check if it's dawn or dusk
function isTwilight() {
    let currentHour = new Date().getHours();
    return currentHour == 6 || currentHour == 18;
}

// Function to check if it's full moon
function isFullMoon() {
    // This is a placeholder. In a real game, you'd replace this with a function that checks the current moon phase.
    return false;
}

// Function to check if the creature is near water
function isNearWater(creature) {
    // This is a placeholder. In a real game, you'd replace this with a function that checks the creature's current location.
    return false;
}

// Function to check if the creature is in a sacred grove
function isInSacredGrove(creature) {
    // This is a placeholder. In a real game, you'd replace this with a function that checks the creature's current location.
    return false;
}

// Exporting the utilities
module.exports = {
    getRandomNumber,
    isDay,
    isTwilight,
    isFullMoon,
    isNearWater,
    isInSacredGrove
};
```
