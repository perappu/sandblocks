class PlayerBehavior extends Sup.Behavior {

  shape: number;
  
  speed = 20;
  position: Sup.Math.Vector3;
  angles = new Sup.Math.Vector3(Math.PI / 2, 0, 0);
  direction = new Sup.Math.Vector3(0, 0, 1);
  
  awake() {
    Game.PlayerBehavior = this;
    this.shape = 0;
    this.actor.fMouseInput.emitter.on("leftClickReleased", () => { this.onLeftClick(); });
    this.position = this.actor.getPosition();
  }
  
  update() {
    
    if (Sup.Input.isKeyDown("R")) {
      Sup.loadScene("Base");
    }
    
    if (Sup.Input.isKeyDown("ANY")) {
      if (Sup.Input.isKeyDown("A")) {
        this.actor.cannonBody.body.velocity.x = -1 * this.speed;
      } 
      if (Sup.Input.isKeyDown("D")) { 
        this.actor.cannonBody.body.velocity.x = 1 * this.speed; 
      } 
      if (Sup.Input.isKeyDown("S")) {
        this.actor.cannonBody.body.velocity.z = 1 * this.speed;
      } 
      if (Sup.Input.isKeyDown("W")) {
        this.actor.cannonBody.body.velocity.z = -1 * this.speed;
      } 
      if (Sup.Input.isKeyDown("SPACE")) {
        this.actor.cannonBody.body.velocity.y = 30;
      }
      if (Sup.Input.wasKeyJustPressed("F")) {
        Sup.appendScene("Prefabs/Spawnable")[0];
      }
      
    } else {
        this.actor.cannonBody.body.velocity.x = 0;
        this.actor.cannonBody.body.velocity.y = 0;
        this.actor.cannonBody.body.velocity.z = 0;
    }
    
    this.position = this.actor.getPosition();
  }
  
  // Change shape when player is clicked
  onLeftClick () {
    this.shape++;
    if (this.shape > 2) this.shape = 0;
    this.setShape();
  }
  
  // Update shape based on variable
  setShape() {
    if(this.shape == 0) {
      this.actor.modelRenderer.setModel("Models/Type 1/Cube");
    }
    else if(this.shape == 1) {
      this.actor.modelRenderer.setModel("Models/Type 2/Sphere");
    } if(this.shape == 2) {
      this.actor.modelRenderer.setModel("Models/Type 3/Cone");
    }
  }
  
}

Sup.registerBehavior(PlayerBehavior);