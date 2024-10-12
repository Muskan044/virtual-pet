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