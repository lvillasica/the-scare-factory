(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['challenge'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  <h2 class=\"bg-alizarin\">\n    Challenge 1: <small>Answer the question</small>\n  </h2>\n  <div class=\"text-content text-center\">\n    "
    + container.escapeExpression(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"question","hash":{},"data":data}) : helper)))
    + "\n    <div class=\"yes-no\">\n      <span><input type=\"radio\" name=\"answer\" value=\"Yes\" /> Yes</span>\n      &nbsp;&nbsp;\n      <span><input type=\"radio\" name=\"answer\" value=\"No\" /> No</span>\n    </div>\n  </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "  <h2 class=\"bg-alizarin\">\n    Challenge 2: <small>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.multiple : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "    </small>\n  </h2>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.multiple : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "    "
    + container.escapeExpression(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"question","hash":{},"data":data}) : helper)))
    + "\n  </div>\n  <div class=\"text-center\">\n    <ul class=\"choices\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.multiple : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.multiple : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "      Look for these items\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "      Look for this item\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"text-content text-center multiple\">\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"text-content text-center\">\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.choices : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <li data-value=\""
    + alias4(((helper = (helper = helpers["1"] || (depth0 != null ? depth0["1"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"1","hash":{},"data":data}) : helper)))
    + "\" data-checked='n'>\n            <div class=\"choice\">\n              <div class=\"check\"></div>\n              <img src=\"assets/img/"
    + alias4(((helper = (helper = helpers["1"] || (depth0 != null ? depth0["1"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"1","hash":{},"data":data}) : helper)))
    + "\" />\n              <div class=\"text\">"
    + alias4(((helper = (helper = helpers["0"] || (depth0 != null ? depth0["0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"0","hash":{},"data":data}) : helper)))
    + "</div>\n            </div>\n          </li>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.choices : depth0),{"name":"each","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <li data-value=\""
    + alias4(((helper = (helper = helpers["0"] || (depth0 != null ? depth0["0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"0","hash":{},"data":data}) : helper)))
    + "\">\n            <div class=\"choice\">\n              <img src=\"assets/img/"
    + alias4(((helper = (helper = helpers["1"] || (depth0 != null ? depth0["1"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"1","hash":{},"data":data}) : helper)))
    + "\" />\n              <div class=\"text\">"
    + alias4(((helper = (helper = helpers["0"] || (depth0 != null ? depth0["0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"0","hash":{},"data":data}) : helper)))
    + "</div>\n            </div>\n          </li>\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"actions\">\n      <button id=\"done-mult-choice\">Done</button>\n    </div>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <h2 class=\"bg-alizarin\">\n    Challenge 3: <small>Complete the words</small>\n  </h2>\n  <div class=\"text-content text-center\">\n    "
    + alias4(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question","hash":{},"data":data}) : helper)))
    + "\n    <br />\n    <div class=\"complete-words\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.lettersArray : depth0),{"name":"each","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </div>\n  <div class=\"clue text-center\">\n    <img src=\"assets/img/"
    + alias4(((helper = (helper = helpers.clueImage || (depth0 != null ? depth0.clueImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"clueImage","hash":{},"data":data}) : helper)))
    + "\" />\n  </div>\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},depth0,{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(24, data, 0),"data":data})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data) {
    return "          <span>&nbsp;"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "&nbsp;</span>\n";
},"24":function(container,depth0,helpers,partials,data) {
    return "          <input type=\"text\" />\n";
},"26":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <h2 class=\"bg-alizarin\">\n    Challenge 3: <small>Rearrange the letters</small>\n  </h2>\n  <div class=\"text-content text-center\">\n    "
    + alias4(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question","hash":{},"data":data}) : helper)))
    + "\n    <br />\n    <strong>"
    + alias4(((helper = (helper = helpers.clueText || (depth0 != null ? depth0.clueText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"clueText","hash":{},"data":data}) : helper)))
    + "</strong>\n    <br />\n    <div class=\"arrange-words text-center\">\n      <input type='text' />\n    </div>\n  </div>\n  <div class=\"actions\">\n    <button id=\"done-arrange\">Done</button>\n  </div>\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "  <h2 class=\"bg-alizarin\">\n    Answer: <small>"
    + container.escapeExpression(((helper = (helper = helpers.answer || (depth0 != null ? depth0.answer : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"answer","hash":{},"data":data}) : helper)))
    + "</small>\n  </h2>\n  <div class=\"text-center\">\n    <ul class=\"answer-images\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.answerImages : depth0),{"name":"each","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.info : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.multiple : depth0),{"name":"if","hash":{},"fn":container.program(33, data, 0),"inverse":container.program(35, data, 0),"data":data})) != null ? stack1 : "")
    + "    <button id=\"ok-next\">OK</button>\n  </div>\n";
},"29":function(container,depth0,helpers,partials,data) {
    return "        <li>\n          <img src=\"assets/img/"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\" />\n        </li>\n";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "    <div class=\"text-content info text-center\">\n      "
    + ((stack1 = ((helper = (helper = helpers.info || (depth0 != null ? depth0.info : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"info","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    </div>\n";
},"33":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"actions multiple\">\n";
},"35":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"actions\">\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.challengeOne : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.challengeTwo : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.challengeThree : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.challengeFour : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.showAnswer : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();