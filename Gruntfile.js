module.exports = function (grunt) {
  grunt.initConfig({
    uglify : {
      dist : {
        files : {
          'app/js/dist/main.js' : [ 'app/js/src/scripts.js' ]
        }
      }
    }, // uglify
    sass_import: {
      options: {},
      dist: {
        files: {
          'app/styles/src/main.scss': [
            'app/styles/src/_variables.scss',
            'app/styles/src/_reset.scss',
            'app/styles/src/_header.scss',
            'app/styles/src/_banner-slider.scss',
            'app/styles/src/_product-slider.scss',
            'app/styles/src/_styles.scss'
          ]
        }
      }
    },
    sass : {
      options : { style : 'compressed' },
      dist: {
        files: {
          'app/styles/dist/styles.css':'app/styles/src/main.scss'
        }
      }
    }, // sass

    watch : {
      dist : {
        files : [
          'app/js/**/*',
          'app/styles/**/*'
        ],

        tasks : [ 'uglify', 'sass_import', 'sass']
      }
    } // watch
  });

  // Grunt plugins
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks('grunt-sass-import');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'uglify', 'sass'] );

  // Tarefa para Watch
  grunt.registerTask( 'w', [ 'watch' ] );
};
