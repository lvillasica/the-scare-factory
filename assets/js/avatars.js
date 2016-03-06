var avatars = ["Anna", "Bebe", "dodong", "Entoy", "MacMac", "Tonyang"];

var Avatar = function () {
  var scope = this;
  var playerAttrs = {
    name : null,
    age  : null,
    sex  : null,
    isMale : null,
    isFemale : null,
    friend : null
  };

  var smokerStatsAttrs = {
    active : null,
    toQuit : null
  };

  this.totalScore = 0;

  this.getSmokerStats = function () {
    return scope.smokerStatus || $.extend({}, smokerStatsAttrs);
  };

  this.setSmokerStats = function (attrs) {
    $.extend(scope.smokerStatus, attrs);
  };

  this.getPlayer = function () {
    return scope.player || $.extend({}, playerAttrs);
  };

  this.setPlayer = function (attrs) {
    $.extend(scope.player, attrs);
    scope.player.isMale = scope.player.sex == 'm';
    scope.player.isFemale = scope.player.sex == 'f';
  };

  this.getProfile = function () {
    return {
      name : scope.name,
      player : scope.player,
      smokerStatus : scope.smokerStatus
    };
  };

  this.allSet = function () {
    var playerName = scope.player.name;
    var playerAge = scope.player.age;
    var playerSex = scope.player.sex;
    return !$.isEmptyObject(playerName) &&
           !$.isEmptyObject(playerAge) &&
           !$.isEmptyObject(playerSex);
  };

  this.name = avatars[0];
  this.player = this.getPlayer();
  this.smokerStatus = this.getSmokerStats();
};