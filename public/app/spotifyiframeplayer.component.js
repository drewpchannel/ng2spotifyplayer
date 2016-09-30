(function(app) {
  debugger;
  var Component = ng.core.Component;

  app.SpotifyIframePlayerComponent = Component({
    selector: 'spotifyiframeplayer',
    template:
    `<iframe src="https://embed.spotify.com/?uri=spotify:user:spotify:playlist:3rgsDhGHZxZ9sB9DQWQfuf" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>`
  })
  .Class({
    constructor: function SpotifyIframePlayerComponent() { }
  });

})(window.app || (window.app = {}));