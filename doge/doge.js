class BootState {
  preload() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVirtically = true;
  }
}

class LoadState {
  create()
  console.log("Loading")
}

var game = new Phaser.Game(320,568);
game.state.add("Boot",BootState);
game.state.start("Boot");
game.state.add("LoadState")
