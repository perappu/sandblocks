class SphereSpawnableBehavior extends Sup.Behavior {
  
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

class CubeSpawnableBehavior extends Sup.Behavior {
  
  initialized = 0;
  
  awake() {
    
    if (Game.PlayerBehavior.shape == 0) {
        this.actor.modelRenderer.setModel("Models/Type 1/Cube");
      } else if (Game.PlayerBehavior.shape == 1) {
        this.actor.modelRenderer.setModel("Models/Type 2/Cube");
      } else if (Game.PlayerBehavior.shape == 2) {
        this.actor.modelRenderer.setModel("Models/Type 3/Cube");
      }
    
    this.initialized = 1;
    
  }
  
  update() {
    
    if (this.initialized == 1) {
      this.actor.setPosition(Sup.Math.Random.float(-4, 4), Sup.Math.Random.float(-4, 4), 2)
    }
    
  }

}

class ConeSpawnableBehavior extends Sup.Behavior {
  
  initialized = 0;
  
  awake() {
    
    if (Game.PlayerBehavior.shape == 0) {
        this.actor.modelRenderer.setModel("Models/Type 1/Cone");
      } else if (Game.PlayerBehavior.shape == 1) {
        this.actor.modelRenderer.setModel("Models/Type 2/Cone");
      } else if (Game.PlayerBehavior.shape == 2) {
        this.actor.modelRenderer.setModel("Models/Type 3/Cone");
      }
    
    this.initialized = 1;
    
  }
  
  update() {
    
    if (this.initialized == 1) {
      this.actor.setPosition(Sup.Math.Random.float(-4, 4), Sup.Math.Random.float(-4, 4), 2)
    }
    
  }

}

Sup.registerBehavior(SphereSpawnableBehavior);
Sup.registerBehavior(CubeSpawnableBehavior);
Sup.registerBehavior(ConeSpawnableBehavior);