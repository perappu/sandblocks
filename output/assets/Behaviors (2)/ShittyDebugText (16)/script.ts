class ShittyDebugTextBehavior extends Sup.Behavior {
  awake() {

  }

  update() {
    
    this.actor.textRenderer.setText("WHY " + Game.PlayerBehavior.position.toString());
    
  }
}
Sup.registerBehavior(ShittyDebugTextBehavior);
