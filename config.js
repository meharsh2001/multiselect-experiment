require.config({
  paths: {
    jquery: "./jquery.min",
    jqueryUI: "./jquery-ui.min",
    multiselect: "./jquery.multiselect",
  },
  shim: {
    multiselect: {
      deps: ["jquery", "jqueryUI"],
      exports: "multiselect",
    },
  },
});