module Game {
        
  export let PlayerBehavior: PlayerBehavior;
  export let CameraBehavior: CameraBehavior;
        
  export let inGameMusicPlayer = new Sup.Audio.SoundPlayer("Sounds/Music1", 2.0, { loop: true });
        
  inGameMusicPlayer.play();

}

let world = Sup.Cannon.getWorld();
world.gravity.set(0, -100, 0);
world.defaultContactMaterial.friction = 0.1;