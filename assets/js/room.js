/*
4 types of challenges
- yes-no
- multiple choice
- words completion
- words arrangement
*/

var Challenge = function (room, type, data, doneCB) {
  var scope = this;
  var popup = $('#room .popup');
  var score = 0;

  this.showYesNo = function () {
    var context = $.extend({challengeOne: true}, data);
    scope.loadTmpl(context);
    popup.fadeIn('slow', function () {
      scope.loadYesNoEvts();
    });
  };

  this.loadYesNoEvts = function () {
    var answerFld = popup.find('[name="answer"]');
    answerFld.on('change', function () {
      var inputted = popup.find('[name="answer"]:checked').val();
      scope.checkAnswer(inputted);
      scope.showAnswer();
    });
  };

  this.showMultipleChoice = function () {
    var context = $.extend({challengeTwo: true}, data);
    scope.loadTmpl(context);
    popup.fadeIn('slow', function () {
      scope.loadMultiChoiceEvts();
    });
  };

  this.loadMultiChoiceEvts = function () {
    var choiceFld = popup.find('.choices li');
    if (data.multiple) {
      choiceFld.on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var el = $(this);
        if (el.attr('data-checked') == 'y') {
          el.attr('data-checked', 'n');
        } else {
          el.attr('data-checked', 'y');
        }
      });
      popup.find('#done-mult-choice').on('click', function () {
        var checked = [];
        $.each(popup.find('[data-checked="y"]'), function (_, fld) {
          checked.push($(fld).data('value'));
        });
        scope.checkAnswer(checked.join(''), data.answerImages.join(''));
        scope.showAnswer();
      });
    } else {
      choiceFld.on('click', function () {
        scope.checkAnswer($(this).data('value'));
        scope.showAnswer();
      });
    }
  };

  this.showWordsCompletion = function () {
    var context = $.extend({
      challengeThree: true,
      lettersArray: room.getLettersArray(data.answer, data.hidden)
    }, data);
    scope.loadTmpl(context);
    popup.fadeIn('slow', function () {
      scope.loadWordsCompletionEvts();
    });
  };

  this.loadWordsCompletionEvts = function () {
    var inputFlds = popup.find('.complete-words input[type="text"]');
    var emptyCount;
    inputFlds.on('blur', function () {
      emptyCount = popup.find('.complete-words input[type="text"]').map(function () {
        if (!!$(this).val() !== true) return this;
      }).length;
      var inputted = [];
      popup.find('.complete-words input[type="text"]').each(function (_, f) {
        inputted.push($(f).val());
      });
      var answerArr = data.answer.split('').map(function (l, i) { if ($.inArray(i, data.hidden) !== -1) return l; });
      if (emptyCount == 0) {
        scope.checkAnswer(inputted.join(''), answerArr.join(''));
        scope.showAnswer();
      }
    });
  };

  this.showWordsArrangement = function () {
    var context = $.extend({challengeFour: true}, data);
    scope.loadTmpl(context);
    popup.fadeIn('slow', function () {
      scope.loadWordsArrEvts();
    });
  };

  this.loadWordsArrEvts = function () {
    var inputted;
    var doneBtn = popup.find('#done-arrange');
    doneBtn.on('click', function () {
      inputted = popup.find('input[type="text"]').val();
      scope.checkAnswer(inputted);
      scope.showAnswer();
    });
  };

  this.checkAnswer = function (input, answer) {
    if (typeof(answer) === 'undefined') answer = data.answer;
    if (typeof(input) === 'string') {
      if (answer.toLowerCase() == input.toLowerCase()) {
        score = data.points;
      }
    }
  };

  this.showAnswer = function () {
    popup.fadeOut('slow', function () {
      var context = $.extend({showAnswer: true}, data);
      scope.loadTmpl(context)
      popup.fadeIn('slow', function () {
        scope.loadOKNextEvt();
      });
    });
  };

  this.loadOKNextEvt = function () {
    var okNext = popup.find('#ok-next');
    okNext.on('click', function () {
      scope.okNext();
    });
  };

  this.okNext = function () {
    popup.fadeOut('slow', function () {
      doneCB(score);
    });
  };

  this.loadTmpl = function (context) {
    var html = Handlebars.templates['challenge'](context);
    popup.html(html);
  };

  switch (type) {
    case 'yes-no':
      setTimeout(scope.showYesNo, 1000);
      break;
    case 'multiple-choice':
      scope.showMultipleChoice();
      break;
    case 'words-completion':
      scope.showWordsCompletion();
      break;
    case 'words-arrangement':
      scope.showWordsArrangement();
      break;
  };
};

var Room = function (game, number) {
  var scope = this;
  var defaultChallenges = {
    "yes-no" : null,
    "multiple-choice" : null,
    "words-completion" : null,
    "words-arrangement" : null
  };

  var challengesStack;
  var currentChallenge;
  var scorePerChallenge = [];

  var challengesData = {
    "room-1" : function () {
      var challenges = $.extend({}, defaultChallenges);
      challenges["yes-no"] = {
        points: 10,
        question: "Can cigarette cause wrinkles?",
        answer: "Yes",
        answerImages: ["Wrinkling.png"],
        info: "Smoking prematurely ages skin by wearing away proteins that give it elasticity, depleting it of Vitamin A and restricting blood flow. Smoker's skin is dry and leathery and etched with tiny lines, especially around the lips and eyes. Smokers in their 40's have facial wrinkles similar to those nonsmokers of age 60 & above."
      };
      challenges["multiple-choice"] = {
        points: 10,
        question: "This chemical is present in a tobacco or cigarette. This chemical is one of the chemicals that were used to kill people in gas chamber during the World War II.",
        choices: [["Hydrogen Cyanide", "HydrogenCyanide.jpg"], ["Mephedrone", "Mephedrone.jpg"], ["Oxycontin", "Oxycontin.jpg"], ["Sodium Gluconate", "SodiumGluconate.jpg"]],
        answer: "Hydrogen Cyanide",
        answerImages: ["HydrogenCyanide.jpg"],
        info: "This chemical together with insecticides (DDT), and fuel (Methanol and Butane) were used to kill people in gas chambers during World War II. These chemicals are among the 4,000 harmful chemicals present in a stick of cigarette."
      };
      challenges["words-completion"] = {
        points: 10,
        question: "Tobacco or cigarette smoking can cause",
        clueImage: "YellowingOfTheTeeth.jpg",
        hidden: [1, 3, 6, 7, 8, 17, 19],
        answer: "Yellowing of the teeth",
        answerImages: ["YellowingOfTheTeeth.jpg"],
        info: "Smoking interferes with the mouth's chemistry, creating excess plaque, yellowish teeth and contributing to tooth decay. Smokers are one and a half times more likely to lose their teeth."
      };
      return challenges;
    },

    "room-2" : function () {
      var challenges = $.extend({}, defaultChallenges);
      challenges["yes-no"] = {
        points: 100,
        question: "Secondhand smoke comes from the active smokers.",
        answer: "Yes",
        answerImages: ["SecondhandSmoke.jpg"],
        info: "Secondhand smoke is inhaled involuntary from tobacco/cigarette smoked by others. It is the combination of smoke from the burning end of cigarette and the smoke breathed out by smokers; also known as sidestream smoke or environmental tobacco smoke."
      };
      challenges["multiple-choice"] = {
        points: 100,
        question: "This chemical in tobacco is among the most harmful to health. This causes cardiovascular disease.",
        choices: [["Carbon Monoxide", "CarbonMonoxide.jpg"], ["Poly Aluminum Chloride", "PolyAluminumChloride.jpg"], ["Tar", "Tar.jpg"], ["Nicotine", "Nicotine.png"]],
        answer: "Nicotine",
        answerImages: ["Nicotine.png"],
        info: "This causes the release of epinephrine and norepinephrine, resulting in arrhythmia, increased heart rate, blood pressure, cardiac output, stroke volume, contractility, oxygen consumption, and coronary blood flow."
      };
      challenges["words-completion"] = {
        points: 100,
        question: "Inhaling cigarette smoke produces several damage to the cerebrovascular system. This doubles the risk factor for",
        clueImage: "Stroke.jpg",
        hidden: [0, 3, 5],
        answer: "Stroke",
        answerImages: ["Stroke.jpg"],
        info: "Smoking makes the heart beat faster, raises blood pressures and increases the risk of hypertension and clogged arteries."
      };
      return challenges;
    },

    "room-3" : function () {
      var challenges = $.extend({}, defaultChallenges);
      challenges["yes-no"] = {
        points: 500,
        question: "Third-hand smoke cannot cling to hair, clothing, furniture and children's toys.",
        answer: "No",
        answerImages: ["ThirdhandSmoke.jpg"],
        info: "Third hand smoke is a combination of cigarette byproducts that can cling to smoker's hair and clothing, as well as to the floors, surface, carpets, furniture, appliances, fabrics and children's toys - even after tobacco smoke has cleared.<br />Secondhand smoke and third hand smoke are as dangerous as first-hand smoke."
      };
      challenges["multiple-choice"] = {
        points: 500,
        question: "This chemical in tobacco/cigarette is among the most harmful to health. It is the particulate matter left when water and nicotine are removed from cigarette smoke. This chemical brings damage to the lungs.",
        choices: [["Poly Aluminum Chloride", "PolyAluminumChloride.jpg"], ["Tar", "Tar.jpg"], ["Petroleum Resin", "PetroleumResin.jpg"], ["Sodium Gluconate", "SodiumGluconate.jpg"]],
        answer: "Tar",
        answerImages: ["Tar.jpg"],
        info: "It contains hydrocarbons and carcinogenic substances. Tar deposits in lung passages, paralyzing clearing mechanisms (cilia) and damages the air sacs (alveoli)."
      };
      challenges["words-completion"] = {
        points: 500,
        question: "It is an odorless, colorless and highly poisonous gas that is present in a tobacco/cigarette. Containing this, smokers are more susceptible to back problems like osteoporosis.",
        clueImage: "CarbonMonoxide.jpg",
        hidden: [1, 3, 7, 9, 10, 12],
        answer: "Carbon Monoxide",
        answerImages: ["CarbonMonoxide.jpg"],
        info: "This reduces the oxygen-carrying capacity of the blood because it competes with oxygen and has greater affinity for hemoglobin."
      };
      return challenges;
    },

    "room-4" : function () {
      var challenges = $.extend({}, defaultChallenges);
      challenges["yes-no"] = {
        points: 1000,
        question: "Can smoking cause cervical cancer?",
        answer: "Yes",
        answerImages: ["CervicalCancer.jpg"],
        info: "Besides increasing the risk of cervical cancer and uterine cancer, smoking can create fertility problems and complications during pregnancy and childbirth. And smoking lowers estrogen levels, speeding up menopause."
      };
      challenges["multiple-choice"] = {
        points: 1000,
        multiple: true,
        question: "Look for the different types of cancer caused by tobacco/ cigarette smoking. You can select as many as you want.",
        choices: [["Mouth Cancer", "MouthCancer.jpg"], ["Lung Cancer", "LungCancer.jpg"], ["Neck Cancer", "NeckCancer.jpg"], ["Nose Cancer", "NoseCancer.jpg"], ["Oral Cancer", "OralCancers.jpg"], ["Kidney Cancer", "KidneyCancer.png"]],
        answer: "All",
        answerImages: ["MouthCancer.jpg", "LungCancer.jpg", "NeckCancer.jpg", "NoseCancer.jpg", "OralCancers.jpg", "KidneyCancer.png"]
      };
      challenges["words-arrangement"] = {
        points: 1000,
        question: "In serious cases for smokers, Buerger's disease can lead to _ _ _ _ _ _ _ _ (the death of body tissue).",
        clueText: "E N R E N G A G",
        answer: "Gangrene",
        answerImages: ["Gangrene.jpg"],
        info: "Decomposition of body tissues can even lead to amputation of a limb."
      };
      return challenges;
    }
  };

  this.getLettersArray = function (str, hidden) {
    return str.split('').map(function (l, i) { return ($.inArray(i, hidden) !== -1)? null : l });
  };

  this.loadChallenges = function () {
    var challenges = challengesData["room-" + number]();
    challengesStack = [];
    $.each(challenges, function (k, val) {
      if (val) challengesStack.unshift(k);
    });
  };

  this.startChallenges = function () {
    scope.loadChallenges();
    currentChallenge = challengesStack.pop();
    setTimeout(function () {
      $('#room .name').fadeOut('slow');
      $('#room .avatar').fadeIn('slow');
      scope.showCurrentChallenge();
    }, 2000);
  };

  this.showScore = function () {
    var score = 0;
    $.each(scorePerChallenge, function (_, s) {
      score += s;
    });
    game.avatar.totalScore += score;
    swal({
      title: "Your score for Room " + number + " is " + score,
      type: "success",
    }, function() {
      if (number == 2 && game.avatar.totalScore == 0) {
        setTimeout(function () {
          game.over();
        }, 1000);
      } else {
        game.showDoor(number + 1);
      }
    });
  };

  this.showCurrentChallenge = function () {
    if (typeof(currentChallenge) === 'undefined') {
      scope.showScore();
      return;
    }
    var challenges = challengesData["room-" + number]();
    var challenge = new Challenge(scope, currentChallenge, challenges[currentChallenge], function (score) {
      currentChallenge = challengesStack.pop();
      scorePerChallenge.push(score);
      scope.showCurrentChallenge();
    });
  };

  switch (number) {
    case 1:
      scope.name = "Physically-deformed Room";
      break;
    case 2:
      scope.name = "Diseased Heart Room";
      break;
    case 3:
      scope.name = "Lung Ailments Room";
      break;
    case 4:
      scope.name = "Cancer Room";
      break;
  };
};