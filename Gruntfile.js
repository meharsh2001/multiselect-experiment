module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    requirejs: {
      compile: {
        options: {
          baseUrl: "./",
          mainConfigFile: "./config.js",
          name: "main",
          //include: ["jquery.min", "jquery-ui.min", "../src/jquery.multiselect"],
          out: "./out.js",
        },
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks("grunt-contrib-requirejs");

  // Default task(s).
  grunt.registerTask("default", ["requirejs"], function (mode) {
    grunt.task.run(["requirejs:compile"]);
  });
};
