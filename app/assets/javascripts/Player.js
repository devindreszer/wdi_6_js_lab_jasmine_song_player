// Player class needs to be defined here!
function Player() {
  this.isPlaying = false;
}

Player.prototype = {
  play: function(song){
    this.isPlaying = true;
    this.currentSong = song;
  },
  pause: function() {
    this.isPlaying = false;
  },
  resume: function() {
    if(this.isPlaying) {
      throw new Error("song is already playing");
    } else {
      this.isPlaying = true;
    }
  },
  makeFavorite: function() {
    this.currentSong.persistFavoriteStatus(true);
  }
};
