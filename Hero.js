class HeroJS extends LivingThingJS {

  secretIdentity;

  constructor(name, health, secretIdentity) {
    super(name, health);
    this.secretIdentity = secretIdentity;
  }

}