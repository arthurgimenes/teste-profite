module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
	    my_target: {
	      files: {
	        'public/js/main.min.js': ['public/js/preencheProdutos.js', 'public/js/inicio.js'],	        
	      }
	    }
  	}
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);

};