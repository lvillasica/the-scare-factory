var Game = function () {
  var scope = this;
  var mainPanel = $('#main-panel');
  var avatar = new Avatar();
  var totalRooms = 4;
  var maxScore = 4830;
  var passingScore = 4825;
  var lowestScore = 300;

  this.avatar = avatar;

  this.begin = function () {
    scope.showSplashScreen();
  };

  this.showSplashScreen = function () {
    scope.loadTmpl('splash-screen', {}, function () {
      var sc = new SplashScreen(scope);
      sc.loadEvents();
    });
  };

  this.showIntro = function () {
    scope.loadTmpl('intro', {}, function () {
      var intro = new Intro(scope);
      intro.loadEvents();
    });
  };

  this.showInstructions = function () {
    scope.loadTmpl('instructions', {}, function () {
      var inst = new Instructions(scope);
      inst.loadEvents();
    });
  };

  this.showProfile = function () {
    scope.loadTmpl('profile', avatar.getProfile(), function () {
      var profile = new Profile(scope);
      profile.loadEvents();
    });
  };

  this.showDoor = function (n) {
    if (n > totalRooms) {
      setTimeout(function () {
        swal({
          title: "Your total score is " + scope.avatar.totalScore
        }, function () {
          scope.showResult();
        });
      }, 1000);
    } else {
      scope.loadTmpl('door', {number: n}, function () {
        var door = new Door(scope, n);
        door.loadEvents();
      });
    }
  };

  this.showResult = function () {
    var score = scope.avatar.totalScore;
    var context = {};
    if (score == maxScore) {
      context.highest = true;
    } else if (score < lowestScore) {
      context.lowest = true;
    } else if (score <= passingScore) {
      context.passing = true;
    }
    scope.loadTmpl('result', context, function () {
      var result = new Result(scope);
      result.loadEvents();
    });
  };

  this.enterRoom = function (n) {
    var context = {number: n, avatarName: scope.avatar.name};
    var room = new Room(scope, n);
    context.name = room.name;
    scope.loadTmpl('room', context, function () {
      room.startChallenges();
    });
  };

  this.showGreenfield = function () {
    scope.loadTmpl('green-field', {}, function () {
      setTimeout(function () {
        $('#green-field .popup').fadeIn('slow', function () {
          setTimeout(function () {
            scope.showFinale(1);
          }, 3000);
        });
      }, 1000);
    });
  };

  this.showFinale = function (number) {
    var context = {number: number};
    if (number == 1) {
      context.first = true;
    } else if (number == 2) {
      context.second = true;
    }
    scope.loadTmpl('finale', context, function () {
      var finale = new Finale(scope);
      finale.loadEvents();
    });
  };

  this.loadTmpl = function (tmpl, data, cb) {
    var html = Handlebars.templates[tmpl](data);
    mainPanel.fadeOut('slow', function () {
      $(this).html(html).fadeIn('slow', cb);
    });
  };

  this.over = function () {
    swal({
      title: "Game Over",
      text: "You have proven that you are a loser.",
      type: "error",
      showConfirmButton: false,
      closeOnConfirm: false
    });
  };

  this.end = function () {
    $('#main-panel #finale').fadeOut(function () {
      $(this).html('<div class="the-end">THE END</div>').fadeIn();
    });
  };
},

SplashScreen = function (game) {
  var scope = this;
  var cont = $('#splash-screen');
  var actions = {
    play : cont.find('button.play'),
    exit : cont.find('button.exit')
  };

  this.loadEvents = function () {
    actions.play.on('click', $.proxy(scope.onPlay, scope));
    actions.exit.on('click', $.proxy(scope.onExit, scope));
  };

  this.onPlay = function (e) {
    e.preventDefault();
    game.showIntro();
  };

  this.onExit = function (e) {
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "You will always be a loser!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, I wanna quit!",
      closeOnConfirm: false },
      function(){
        game.over();
      });
  };
},

Intro = function (game) {
  var scope = this;
  var cont = $('#intro');
  var actions = {
    next : cont.find('button.next'),
    quit : cont.find('button.quit')
  };

  this.loadEvents = function () {
    actions.next.on('click', $.proxy(scope.onNext, scope));
    actions.quit.on('click', $.proxy(scope.onQuit, scope));
  };

  this.onNext = function (e) {
    e.preventDefault();
    game.showInstructions();
  };

  this.onQuit = function (e) {
    e.preventDefault();
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "You will always be a loser!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, I wanna quit!",
      closeOnConfirm: false },
      function(){
        game.over();
      });
  };
},

Instructions = function (game) {
  var scope = this;
  var cont = $('#instructions');
  var actions = {
    next : cont.find('button.next'),
    quit : cont.find('button.quit')
  };

  this.loadEvents = function () {
    actions.next.on('click', $.proxy(scope.onNext, scope));
    actions.quit.on('click', $.proxy(scope.onQuit, scope));
  };

  this.onNext = function (e) {
    e.preventDefault();
    game.showProfile();
  };

  this.onQuit = function (e) {
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "You will always be a loser!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, I wanna quit!",
      closeOnConfirm: false },
      function(){
        game.over();
      });
  };
},

Profile = function (game) {
  var scope = this;
  var cont = $('#profile');
  var mainPanel = cont.closest('#main-panel');
  var actions = {
    avatarNext : cont.find('#avatar-next'),
    avatarPrev : cont.find('#avatar-prev'),
    ok : cont.find('button.ok')
  };
  var avatar = game.avatar;

  this.reload = function () {
    cont = $('#profile');
    actions = {
      avatarNext : cont.find('#avatar-next'),
      avatarPrev : cont.find('#avatar-prev'),
      ok : cont.find('button.ok')
    };
    this.loadEvents();
  };

  this.loadEvents = function () {
    actions.avatarNext.on('click', $.proxy(scope.onAvatarNext, scope));
    actions.avatarPrev.on('click', $.proxy(scope.onAvatarPrev, scope));
    actions.ok.on('click', $.proxy(scope.onOK, scope));
    cont.find('input').on('blur', $.proxy(scope.onBlurInput, scope));
  };

  this.onOK = function (e) {
    e.preventDefault();
    if (avatar.allSet()) {
      game.showDoor(1);
    } else {
      swal("Not OK!", "Please tell us about yourself.", "error");
    }
  };

  this.onBlurInput = function (e) {
    avatar.setPlayer(scope.getPlayerData());
    avatar.setSmokerStats(scope.getSmokerStats());
  };

  this.getPlayerData = function () {
    return {
      name : cont.find('[name="player[name]"]').val(),
      age : cont.find('[name="player[age]"]').val(),
      sex : cont.find('[name="player[sex]"]:checked').val()
    };
  };

  this.getSmokerStats = function () {
    return {
      active : cont.find('[name="smoker"]:checked').val() == 'y',
      inactive : cont.find('[name="smoker"]:checked').val() == 'n',
      toQuit : cont.find('[name="to_quit_smoking"]:checked').val() == 'y',
      notoQuit : cont.find('[name="to_quit_smoking"]:checked').val() == 'n'
    };
  };

  this.onAvatarNext = function (e) {
    e.preventDefault();
    scope.chooseNextAvatar();
    scope.updateAvatar();
  };

  this.onAvatarPrev = function (e) {
    e.preventDefault();
    scope.choosePrevAvatar();
    scope.updateAvatar();
  };

  this.chooseNextAvatar = function () {
    currentAvatarIdx = $.inArray(avatar.name, avatars);
    if (avatar && (currentAvatarIdx + 1) < avatars.length) {
      avatar.name = avatars[currentAvatarIdx + 1];
    } else {
      avatar.name = avatars[0];
    }
    mainPanel.find('.box.avatar img').fadeOut('slow');
  };

  this.choosePrevAvatar = function () {
    currentAvatarIdx = $.inArray(avatar.name, avatars);
    if (avatar && (currentAvatarIdx + 1) > 1) {
      avatar.name = avatars[currentAvatarIdx - 1];
    } else {
      avatar.name = avatars[avatars.length - 1];
    }
    mainPanel.find('.box.avatar img').fadeOut('slow');
  };

  this.updateAvatar = function () {
    var html = Handlebars.templates['profile'](avatar.getProfile());
    mainPanel.html(html);
    mainPanel.find('.box.avatar img').fadeIn('slow');
    scope.reload();
  };
},

Door = function (game, n) {
  var scope = this;
  var avatar = game.avatar;
  var cont = $('#door');
  var actions = {
    play : cont.find('button.play')
  };

  this.loadEvents = function () {
    actions.play.on('click', $.proxy(scope.onPlay, scope));
  };

  this.onPlay = function (e) {
    e.preventDefault();
  };

  var i = 5;
  setInterval(function() {
    if (i > 0) {
      cont.find('.countdown').hide().text(i).fadeIn('slow');
      i--;
    } else if (i == 0) {
      cont.find('.countdown').fadeOut();
      swal({
        title: "Hi " + avatar.name + "!",
        text: "Are you ready?",
        type: "success",
      }, function (isConfirm) {
        if (isConfirm) {
          game.enterRoom(n);
        }
      });
      i--;
    }
  }, 1000);
},

Result = function (game) {
  var scope = this;
  var cont = $('#result');
  var actions = {
    next : cont.find('button.next'),
    ok   : cont.find('button.ok')
  };

  this.loadEvents = function () {
    actions.next.on('click', $.proxy(scope.onNext, scope));
    actions.ok.on('click', $.proxy(scope.onOk, scope));
  };

  this.onNext = function (e) {
    e.preventDefault();
    game.showGreenfield();
  };

  this.onOk = function (e) {
    e.preventDefault();
    game.showFinale(1);
  };
},

Finale = function (game) {
  var scope = this;
  var avatar = game.avatar;
  var cont = $('#finale');
  var actions = {
    next1 : cont.find('button.next-1'),
    next2 : cont.find('button.next-2'),
    done  : cont.find('button.done')
  };

  var summary = "";

  this.loadEvents = function () {
    actions.next1.on('click', $.proxy(scope.onNext1, scope));
    actions.next2.on('click', $.proxy(scope.onNext2, scope));
    actions.done.on('click', $.proxy(game.end, game));
    cont.find('input[name="share"]').on('change', $.proxy(scope.onSetShare, scope));
    cont.find('input').on('blur', $.proxy(scope.onBlurInput, scope));
  };

  this.onSetShare = function (e) {
    e.preventDefault();
    if (cont.find('input[name="share"]:checked').val() == 'y') {
      cont.find('.content .with-whom').fadeIn();
    } else {
      cont.find('[name="player[friend]"]').val('');
      avatar.player.friend = cont.find('[name="player[friend]"]').val();
      cont.find('.content .with-whom').fadeOut();
    }
  };

  this.onBlurInput = function (e) {
    e.preventDefault();
    avatar.player.friend = avatar.player.friend || cont.find('[name="player[friend]"]').val();
    avatar.setSmokerStats(scope.getSmokerStats());
  };

  this.getSmokerStats = function () {
    return $.extend(avatar.smokerStatus, {
      toQuit : cont.find('[name="to_quit_smoking"]:checked').val() == 'y',
      notoQuit : cont.find('[name="to_quit_smoking"]:checked').val() == 'n'
    });
  };

  this.onNext1 = function (e) {
    e.preventDefault();
    if (avatar.smokerStatus.active && avatar.smokerStatus.toQuit !== true) {
      game.showFinale(2);
    } else {
      scope.showSummary();
    }
  };

  this.onNext2 = function (e) {
    e.preventDefault();
    scope.showSummary();
  };

  this.showSummary = function () {
    summary += "Avatar: <strong>" + (avatar.name || 'None') + "</strong><br />";
    summary += "Player Name: <strong>" + (avatar.player.name || 'None') + "</strong><br />";
    summary += "Player Age: <strong>" + (avatar.player.age || 'None') + "</strong><br />";
    summary += "Player Sex: <strong>" + (avatar.player.sex || 'None') + "</strong><br />";
    summary += "Smoker?: <strong>" + (avatar.smokerStatus.active || 'N/A') + "</strong><br />";
    summary += "Plans to quit?: <strong>" + (avatar.smokerStatus.toQuit || 'N/A') + "</strong><br />";
    summary += "Will share this to: <strong>" + (avatar.player.friend || 'None') + "</strong><br />";
    summary += "Total score: <strong>" + avatar.totalScore + "</strong><br />";
    cont.find('.content').hide().html('<div class="summary"><h1>Summary</h1>' + summary + '</div>').fadeIn();
    actions.next1.hide();
    actions.next2.hide();
    actions.done.fadeIn();
  };
};
