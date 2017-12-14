public class LivingThing {

  protected String name;
  protected int health;

  public LivingThing(String name, int health) {
    this.name = name;
    this.health = health;
  }

  public boolean isAlive() {
    return (health > 0);
  }

  public int getHealth() {
    return health;
  }

  public void setHealth(int health) {
    this.health = health;

    if (this.health < 0) {
      setHealth(0);
    }

  }

  public String getName() {
    return name;
  }

}