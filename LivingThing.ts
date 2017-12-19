class LivingThingTS {

  name: string;
  health: number;

  constructor(name: string, health: number) {
    this.name = name;
    this.health = health;
  }

  isAlive(): boolean {
    return (this.health > 0);
  }

  getHealth(): number {
    return this.health;
  }

  setHealth(health: number): void {
    this.health = health;

    if (this.health < 0) {
      this.setHealth(0);
    }

  }

  getName(): string {
    return name;
  }

}