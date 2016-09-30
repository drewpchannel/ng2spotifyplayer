(function(app) {
  var Component = ng.core.Component;

  app.AppComponent = Component({
    selector: 'my-app',
    template:
      `
      <h1>Spotify Iframe Player</h1>
      <spotifyiframeplayer></spotifyiframeplayer>
      `
  })
  .Class({
    constructor: function AppComponent() { }
  });

})(window.app || (window.app = {}));