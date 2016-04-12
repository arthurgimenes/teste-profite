module.exports = function (grunt) {
  grunt.initConfig({
    uglify : {
      dist : {
        files : {
          'app/js/dist/main.js' : [ 'app/js/src/scripts.js' ]
        }
      }
    }, // uglify

    sass : {
      options : { style : 'compressed' },
      dist: {
        files: [{
            expand: true,
            cwd: 'app/styles/src',
            src: ['*.scss'],
            dest: 'app/styles/dist',
            ext: '.css',
        }]
      }
    }, // sass

    watch : {
      dist : {
        files : [
          'app/js/**/*',
          'app/styles/**/*'
        ],

        tasks : [ 'uglify', 'sass']
      }
    } // watch
  });

  // Grunt plugins
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'uglify', 'sass'] );

  // Tarefa para Watch
  grunt.registerTask( 'w', [ 'watch' ] );
};
