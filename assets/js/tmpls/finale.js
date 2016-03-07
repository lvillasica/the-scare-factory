(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['finale'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"share text-center\">\n        Will you share the information about smoking?\n        <br />\n        <input type=\"radio\" name=\"share\" value=\"y\" /> Yes\n        &nbsp;&nbsp;\n        <input type=\"radio\" name=\"share\" value=\"n\" /> No\n      </div>\n      <div class=\"with-whom text-center hide\">\n        With whom?\n        <br />\n        <input type=\"text\" name=\"player[friend]\" />\n      </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"plan-to-quit text-center\">\n        Do you plan to quit smoking?\n        <br />\n        <input type=\"radio\" name=\"to_quit_smoking\" value=\"y\" /> Yes\n        &nbsp;&nbsp;\n        <input type=\"radio\" name=\"to_quit_smoking\" value=\"n\" /> No\n      </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div id=\"finale\">\n  <div class=\"content\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.first : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.second : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n  <div class=\"bottom-actions bg-midnight-blue\">\n    <div class=\"left\">\n    </div>\n    <div class=\"right text-right\">\n      <button class=\"next-"
    + container.escapeExpression(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"number","hash":{},"data":data}) : helper)))
    + " btn bg-emerald\">NEXT</button>\n      <button class=\"done btn bg-emerald hide\">DONE</button>\n    </div>\n  </div>\n</div>";
},"useData":true});
})();