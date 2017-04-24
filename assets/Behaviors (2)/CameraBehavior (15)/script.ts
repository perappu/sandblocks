class CameraBehavior extends Sup.Behavior {

  cameraOffset = this.actor.getPosition();
  originalOrientation = this.actor.getOrientation();
  playerPosition : Sup.Math.Vector3;
  
  awake() {
  
    this.cameraOffset = this.actor.getPosition();
    this.playerPosition = Game.PlayerBehavior.position;
    
  }

  update() {
    this.playerPosition = Game.PlayerBehavior.position;
    let x = this.playerPosition.x;
    let y = this.playerPosition.y + this.cameraOffset.y;
    let z = this.playerPosition.z + this.cameraOffset.z;
    
    this.actor.setPosition(new Sup.Math.Vector3(x, y, z));
    
    if (Sup.Input.isMouseButtonDown(2)) {
      let mousePosition = Sup.Input.getMousePosition();
      this.actor.lookAt(new Sup.Math.Vector3(mousePosition.x, mousePosition.y, this.playerPosition.z));
    }
    
    if (Sup.Input.wasMouseButtonJustReleased(2)) {
      this.actor.setOrientation(this.originalOrientation);
    }
  }
}

Sup.registerBehavior(CameraBehavior);