(function () {
  "use strict";

  // Load the config

  require(["config"], function (requirejs) {
    require(["multiselect"], function (multiselect) {
      $(function () {
        $("select").multiselect();
      });
    });
  });
})();
