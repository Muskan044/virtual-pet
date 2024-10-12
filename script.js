let pet = {
    name: "",
    type: "",
    age: 0,
    happiness: 50, // Default happiness between 0 and 100
    hunger: 50,    // Default hunger between 0 and 100
}

// Method to feed the pet
feed() {
    if (this.hunger > 0) {
        this.hunger -= 20;
        if (this.hunger < 0) this.hunger = 0; // Hunger can't be negative
        alert(`${this.name} has been fed. Hunger is now: ${this.hunger}`);
    } else {
        alert(`${this.name} is not hungry.`);
    }
},

// Method to play with the pet
play() {
    if (this.happiness < 100) {
        this.happiness += 20;
        if (this.happiness > 100) this.happiness = 100; // Happiness can't exceed 100
        alert(`${this.name} played and is happy! Happiness is now: ${this.happiness}`);
    } else {
        alert(`${this.name} is already fully happy!`);
    }
},

// Method to age the pet
agePet() {
    this.age += 1;
    this.happiness -= 5;
    this.hunger += 10;

    if (this.happiness < 0) this.happiness = 0; // Happiness can't be below 0
    if (this.hunger > 100) this.hunger = 100;   // Hunger can't exceed 100

    alert(`${this.name} has grown older! Age: ${this.age}, Happiness: ${this.happiness}, Hunger: ${this.hunger}`);
}
};