class CubeTouchableBehavior extends Sup.Behavior {
  
  awake() {
    this.actor.cannonBody.body.addEventListener('collide', this.onCollide); 
  }

  update() {
    
  }
  
  onCollide(e) {
    
      let collidedActor = Sup.getActor("InteractableCube");

      if (Game.PlayerBehavior.shape == 0) {
        collidedActor.getChild("Model").modelRenderer.setModel("Models/Type 1/Cube");
      } else if (Game.PlayerBehavior.shape == 1) {
        collidedActor.getChild("Model").modelRenderer.setModel("Models/Type 2/Cube");
      } else if (Game.PlayerBehavior.shape == 2) {
        collidedActor.getChild("Model").modelRenderer.setModel("Models/Type 3/Cube");
      }
    
  }
}

class SphereTouchableBehavior extends Sup.Behavior {
  
  awake() {
    this.actor.cannonBody.body.addEventListener('collide', this.onCollide); 
  }

  update() {
    
  }
  
  onCollide(e) {
    
      let collidedActor = Sup.getActor("InteractableSphere");

      if (Game.PlayerBehavior.shape == 0) {
        collidedActor.getChild("Model").modelRenderer.setModel("Models/Type 1/Sphere");
      } else if (Game.PlayerBehavior.shape == 1) {
        collidedActor.getChild("Model").modelRenderer.setModel("Models/Type 2/Sphere");
      } else if (Game.PlayerBehavior.shape == 2) {
        collidedActor.getChild("Model").modelRenderer.setModel("Models/Type 3/Sphere");
      }
    
  }
}

class ConeTouchableBehavior extends Sup.Behavior {
  
  awake() {
    this.actor.cannonBody.body.addEventListener('collide', this.onCollide); 
  }

  update() {
    
  }
  
  onCollide(e) {
    
      let collidedActor = Sup.getActor("InteractableCone");

      if (Game.PlayerBehavior.shape == 0) {
        collidedActor.getChild("Model").modelRenderer.setModel("Models/Type 1/Cone");
      } else if (Game.PlayerBehavior.shape == 1) {
        collidedActor.getChild("Model").modelRenderer.setModel("Models/Type 2/Cone");
      } else if (Game.PlayerBehavior.shape == 2) {
        collidedActor.getChild("Model").modelRenderer.setModel("Models/Type 3/Cone");
      }
    
  }
}

Sup.registerBehavior(CubeTouchableBehavior);
Sup.registerBehavior(SphereTouchableBehavior);
Sup.registerBehavior(ConeTouchableBehavior);
