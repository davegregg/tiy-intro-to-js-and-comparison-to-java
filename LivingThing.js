class LivingThing {
  
  name;
  health;

  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  isAlive() {
    return (health > 0);
  }

  getHealth() {
    return health;
  }

  setHealth(health) {
    this.health = health;

    if (this.health < 0) {
      setHealth(0);
    }

  }

  getName() {
    return name;
  }

}