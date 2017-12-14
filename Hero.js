class Hero extends LivingThing {

  secretIdentity;

  Hero(name, health, secretIdentity) {
    super(name, health);
    this.secretIdentity = secretIdentity;
  }

}