(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['splash-screen'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"splash-screen\">\n  <div id=\"action-panel\">\n    <div class=\"text-center\">\n      <button class=\"play btn bg-emerald\">PLAY</button>\n    </div>\n    <div class=\"text-center\">\n      <button class=\"exit btn bg-clouds\">NO, THANKS</button>\n    </div>\n  </div>\n</div>";
},"useData":true});
})();