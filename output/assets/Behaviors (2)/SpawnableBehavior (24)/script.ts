class SpawnableBehavior extends Sup.Behavior {
  
  initialized = 0;
  
  awake() {
    
    if (Game.PlayerBehavior.shape == 0) {
        this.actor.modelRenderer.setModel("Models/Type 1/Sphere");
      } else if (Game.PlayerBehavior.shape == 1) {
        this.actor.modelRenderer.setModel("Models/Type 2/Sphere");
      } else if (Game.PlayerBehavior.shape == 2) {
        this.actor.modelRenderer.setModel("Models/Type 3/Sphere");
      }
    
    this.initialized = 1;
    
  }
  
  update() {
    
    if (this.initialized == 1) {
      this.actor.setPosition(Sup.Math.Random.float(-4, 4), Sup.Math.Random.float(-4, 4), 2)
    }
    
  }

}
Sup.registerBehavior(SpawnableBehavior);
