module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    requirejs: {
      compile: {
        options: {
          baseUrl: "./",
          mainConfigFile: "config.js",
          out: "build/out.js",
          findNestedDependencies: true,
          name: "js/main",
          optimize: "none",
          //include: ["jquery.min", "jquery-ui.min", "../src/jquery.multiselect"],
        },
      },
    },
    uglify: {
      compile: {
        files: {
          "build/out.js": ["build/out.js"],
        },
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-requirejs");

  // Default task(s).
  grunt.registerTask("default", ["requirejs"], function (mode) {
    grunt.task.run(["requirejs:compile", "uglify"]);
  });
};
