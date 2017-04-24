class TouchableBehavior extends Sup.Behavior {
  
  name : String;
  
  awake() {
    this.actor.cannonBody.body.addEventListener('collide', (event) => {
      
      if (Game.PlayerBehavior.shape == 0) {
        this.actor.getChild("Model").modelRenderer.setModel("Models/Type 1/" + this.actor.getName());
      } else if (Game.PlayerBehavior.shape == 1) {
        this.actor.getChild("Model").modelRenderer.setModel("Models/Type 2/" + this.actor.getName());
      } else if (Game.PlayerBehavior.shape == 2) {
        this.actor.getChild("Model").modelRenderer.setModel("Models/Type 3/" + this.actor.getName());
      }
      
    }); 
  }

  update() {
    
  }
}

Sup.registerBehavior(TouchableBehavior);
