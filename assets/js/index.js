Handlebars.registerHelper('isRadioChecked', function (bool) {
  if (bool) return 'checked';
});

$(function () {
  sweetAlertInitialize();
  var game = new Game();
  game.showSplashScreen();
});
