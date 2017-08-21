module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
	    my_target: {
	      files: {
	        'public/js/main.min.js': ['src/js/preencheProdutos.js', 'src/js/inicio.js']
	      }
	    }
  	},
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'src/js/min', src: ['*'], dest: 'public/js/', filter: 'isFile'},          
          {expand: true, cwd: 'src/css/fonte', src: ['*'], dest: 'public/css/fonte', filter: 'isFile'},          
          {expand: true, cwd: 'src/img', src: ['**'], dest: 'public/img/'}       
        ],
      },
    },
    cssmin: {      
      target: {
        files: {
          'public/css/main.css': ['src/css/base.css', 'src/css/cabecalho.css', 'src/css/modal.css'],
          'public/css/layout.min.css' : ['src/css/layout.css'],
          'public/css/layout_resp.min.css' : ['src/css/layout_responsivo.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', function(target) {
    grunt.task.run('uglify');
    grunt.task.run('copy');
    grunt.task.run('cssmin');
  });
};