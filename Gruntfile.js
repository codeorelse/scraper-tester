module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
     casperjs: {
    options: {
      async: {
        parallel: true
      }
    },
    files: ['tests/*.js']
  }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-casperjs');

  // Default task(s).
  grunt.registerTask('default', ['casperjs']);

};