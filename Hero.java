public class Hero extends LivingThing {

	private String secretIdentity;

	public Hero(String name, int health, String secretIdentity) {
		super(name, health);
		this.secretIdentity = secretIdentity;
  }
  
}