(function(app) {
  var Component = ng.core.Component;

  app.casperPlay = Component({
    selector: 'spotifyiframeplayer',
    template:
    `
    <iframe src="https://embed.spotify.com/?uri=spotify:user:1273510697:playlist:4eIKwxK3OkCIfRgrIwjnSi" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
    <button>Play</button>
    `
  })
  .Class({
    constructor: function SpotifyIframePlayerComponent() { }
  });

})(window.app || (window.app = {}));