class MouseFollowBehavior extends Sup.Behavior {
  
  update() {
    let position = Sup.Input.getMousePosition();
    let x = position.x;
    let y = position.y;
    this.actor.setPosition(new Sup.Math.Vector2(x, y));
  }
  
}

Sup.registerBehavior(MouseFollowBehavior);
