class ClickableBehavior extends Sup.Behavior {
  awake() {
    this.actor.fMouseInput.emitter.on("leftClickReleased", () => { this.onLeftClick(); });
  }

  update() {
    
  }
  
  onLeftClick() {
    
    if (Game.PlayerBehavior.shape == 0) {
      this.actor.spriteRenderer.setSprite("Wall 1");
    } else if (Game.PlayerBehavior.shape == 1) {
      this.actor.spriteRenderer.setSprite("Wall 2");
    } else if (Game.PlayerBehavior.shape == 2) {
      this.actor.spriteRenderer.setSprite("Circle");
    }
  }
}
Sup.registerBehavior(ClickableBehavior);
