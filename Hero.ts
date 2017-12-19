class HeroTS extends LivingThingTS {

  secretIdentity: string;

  constructor(name: string, health: number, secretIdentity: string) {
    super(name, health);
    this.secretIdentity = secretIdentity;
  }

}