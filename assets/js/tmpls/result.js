(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['result'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "      <h1>\n        Congratulations!\n      </h1>\n      <h2>\n        You've reached the highest score!\n      </h2>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "      <h1>\n        Congratulations!\n      </h1>\n      <h2>\n        You've gained enough score.\n      </h2>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "      <h1>\n        Sorry.\n      </h1>\n      <h2>\n        You failed to gain enough score.\n      </h2>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "        <button class=\"ok btn bg-emerald\">OK</button>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "        <button class=\"next btn bg-emerald\">PROCEED TO GREENFIELD</button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div id=\"result\">\n  <div class=\"msg text-center\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.highest : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.passing : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.lowest : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n  <div class=\"bottom-actions bg-midnight-blue\">\n    <div class=\"left\">\n    </div>\n    <div class=\"right text-right\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.lowest : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n  </div>\n</div>";
},"useData":true});
})();