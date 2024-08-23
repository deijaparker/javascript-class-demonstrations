// -------------------------------part 1-------------------------------------
const explorer = {
  name: "Riley",
  health: 15,
  gear: ["blade", "elixir", "crystal"],
  ally: {
    name: "Skyler",
    species: "Fox",
    ally: {
      name: "Pip",
      species: "Bug",
      items: ["mini hat", "shades"],
    },
  },
  rollDice(mod = 0) {
    const outcome = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${outcome}.`);
  },
};

explorer.gear.forEach((item) => {
  console.log(item);
});
// explorer.rollDice()
console.log("---------------------------------------------");

// ---------------------------------------part 2--------------------------------------
class Entity {
  static MAX_HEALTH = 120;
  constructor(name) {
    this.name = name;
    this.health = 120;
    this.gear = [];
  }
  rollDice(mod = 0) {
    const outcome = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${outcome}.`);
  }
}

const riley = new Entity("Riley");
riley.gear = ["blade", "elixir", "crystal"];
riley.ally = new Entity("Skyler");
riley.ally.species = "Fox";
riley.ally.ally = new Entity("Pip");
riley.ally.ally.species = "Bug";
riley.ally.ally.gear = ["mini hat", "shades"];

riley.rollDice();
console.log("---------------------------------------------");

// ---------------------------------------part 3--------------------------------------
class Adventurer extends Entity {
  static ROLES = ["Guardian", "Sorcerer", "Rogue"];
  constructor(name, role) {
    super(name);
    if (Adventurer.ROLES.includes(role)) {
      this.role = role;
    } else {
      throw new Error("Invalid role provided");
    }
    this.gear.push("sleeping bag", "100 gold coins");
  }
  scoutAhead() {
    console.log(`${this.name} is scouting the area...`);
    super.rollDice();
  }
}

class Sidekick extends Adventurer {
  constructor(name, role) {
    super(name, role);
  }
  introduce() {
    console.log(`${this.name} is a ${this.role}`);
    super.scoutAhead();
  }
}

const newRiley = new Sidekick("Riley", "Sorcerer");
newRiley.introduce();
