class TextBehavior extends Sup.Behavior {
  
  visible = true;
  
  awake() {

  }

  update() {
    
    if (Sup.Input.wasKeyJustPressed("H")) {
        if(this.visible == true) {
          this.actor.setVisible(false);
          this.visible = false; }
        else if(this.visible == false) {
          this.actor.setVisible(true);
          this.visible = true; }
      }
    
  }
}
Sup.registerBehavior(TextBehavior);
