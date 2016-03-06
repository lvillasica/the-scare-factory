#!/usr/bin/env bash

handlebars templates/splash-screen.handlebars -f assets/js/tmpls/splash-screen.js
handlebars templates/intro.handlebars -f assets/js/tmpls/intro.js
handlebars templates/instructions.handlebars -f assets/js/tmpls/instructions.js
handlebars templates/profile.handlebars -f assets/js/tmpls/profile.js
handlebars templates/door.handlebars -f assets/js/tmpls/door.js
handlebars templates/room.handlebars -f assets/js/tmpls/room.js
handlebars templates/challenge.handlebars -f assets/js/tmpls/challenge.js
handlebars templates/result.handlebars -f assets/js/tmpls/result.js
handlebars templates/green-field.handlebars -f assets/js/tmpls/green-field.js
handlebars templates/finale.handlebars -f assets/js/tmpls/finale.js