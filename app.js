require.config({
  paths: {
    jquery: "./jquery.min",
    jqueryUI: "./jquery-ui.min",
    multiselect: "./jquery.multiselect",
  },
  shim: {
    multiselect: { deps: ["jquery", "jqueryUI"], exports: "multiselect" },
  },
}),
  define("config", function () {}),
  (function () {
    "use strict";
    require(["config"], function (e) {
      require(["multiselect"], function (e) {
        $(function () {
          $("select").multiselect();
        });
      });
    });
  })(),
  define("main", function () {});
