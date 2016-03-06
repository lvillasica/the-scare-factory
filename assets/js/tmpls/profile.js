(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['profile'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "<div id=\"profile\">\n  <div class=\"box about bg-concrete\">\n    <div class=\"box-note bg-alizarin\">\n      About yourself\n    </div>\n    <div class=\"input-group\">\n      <label>Name <br />\n        <input type=\"text\" name=\"player[name]\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" />\n      </label>\n    </div>\n    <div class=\"input-group\">\n      <label>Age <br />\n        <input type=\"text\" name=\"player[age]\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.age : stack1), depth0))
    + "\" />\n      </label>\n    </div>\n    <div class=\"input-group\">\n      <label>Sex <br />\n        <input type=\"radio\" name=\"player[sex]\" value=\"m\" "
    + alias2((helpers.isRadioChecked || (depth0 && depth0.isRadioChecked) || alias4).call(alias3,((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.isMale : stack1),{"name":"isRadioChecked","hash":{},"data":data}))
    + " /> Male <br />\n        <input type=\"radio\" name=\"player[sex]\" value=\"f\" "
    + alias2((helpers.isRadioChecked || (depth0 && depth0.isRadioChecked) || alias4).call(alias3,((stack1 = (depth0 != null ? depth0.player : depth0)) != null ? stack1.isFemale : stack1),{"name":"isRadioChecked","hash":{},"data":data}))
    + " /> Female\n      </label>\n    </div>\n  </div>\n  <div class=\"box avatar bg-concrete\">\n    <div class=\"box-note bg-alizarin\">\n      Choose\n    </div>\n    <div class=\"input-group text-center\">\n      <img src=\"assets/img/"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"name","hash":{},"data":data}) : helper)))
    + ".png\">\n    </div>\n    <div class=\"input-group text-center avatar-controls\">\n      <button id=\"avatar-prev\">&#8610; Prev</button>&nbsp;\n      <strong id=\"avatar-name\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"name","hash":{},"data":data}) : helper)))
    + "</strong>&nbsp;\n      <button id=\"avatar-next\">Next &#8611;</button>\n    </div>\n  </div>\n  <div class=\"box question bg-concrete\">\n    <div class=\"box-note bg-alizarin\">\n      Answer these questions\n    </div>\n    <div class=\"input-group text-larger\">\n      <label>Do you currently smoke? <br />\n        <input type=\"radio\" name=\"smoker\" value=\"y\" "
    + alias2((helpers.isRadioChecked || (depth0 && depth0.isRadioChecked) || alias4).call(alias3,((stack1 = (depth0 != null ? depth0.smokerStatus : depth0)) != null ? stack1.active : stack1),{"name":"isRadioChecked","hash":{},"data":data}))
    + " /> Yes &nbsp;&nbsp;\n        <input type=\"radio\" name=\"smoker\" value=\"n\" "
    + alias2((helpers.isRadioChecked || (depth0 && depth0.isRadioChecked) || alias4).call(alias3,((stack1 = (depth0 != null ? depth0.smokerStatus : depth0)) != null ? stack1.inactive : stack1),{"name":"isRadioChecked","hash":{},"data":data}))
    + " /> No\n      </label>\n    </div>\n    <div class=\"input-group text-larger\">\n      <label>Do you plan to quit smoking? <br />\n        <input type=\"radio\" name=\"to_quit_smoking\" value=\"y\" "
    + alias2((helpers.isRadioChecked || (depth0 && depth0.isRadioChecked) || alias4).call(alias3,((stack1 = (depth0 != null ? depth0.smokerStatus : depth0)) != null ? stack1.toQuit : stack1),{"name":"isRadioChecked","hash":{},"data":data}))
    + " /> Yes &nbsp;&nbsp;\n        <input type=\"radio\" name=\"to_quit_smoking\" value=\"n\" "
    + alias2((helpers.isRadioChecked || (depth0 && depth0.isRadioChecked) || alias4).call(alias3,((stack1 = (depth0 != null ? depth0.smokerStatus : depth0)) != null ? stack1.notoQuit : stack1),{"name":"isRadioChecked","hash":{},"data":data}))
    + " /> No\n      </label>\n    </div>\n  </div>\n  <div class=\"bottom-actions bg-midnight-blue\">\n    <div class=\"left\">\n    </div>\n    <div class=\"right text-right\">\n      <button class=\"ok btn bg-emerald\">OK</button>\n    </div>\n  </div>\n</div>";
},"useData":true});
})();