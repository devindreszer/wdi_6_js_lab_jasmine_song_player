// Player class needs to be defined here!
function Player(isPlaying, currentSong) {
  this.isPlaying = isPlaying || false;
  this.currentSong = currentSong;
}

Player.prototype = {
  play: function(song){
    this.isPlaying = true;
    this.currentSong = song;
  }
};
