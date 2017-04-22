class CameraBehavior extends Sup.Behavior {

  cameraOffset = this.actor.getPosition();
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
  }
}

Sup.registerBehavior(CameraBehavior);