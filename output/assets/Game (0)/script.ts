module Game {
        
  export let PlayerBehavior: PlayerBehavior;
  export let CameraBehavior: CameraBehavior;

}

let world = Sup.Cannon.getWorld();
world.gravity.set(0, -100, 0);
world.defaultContactMaterial.friction = 0.1;