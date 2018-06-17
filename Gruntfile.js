module.exports = function(grunt) {

    grunt.initConfig({
    /* Copia os arquivos para o diretório 'dist' */
    copy: {
        public: {
            expand: true,
            cwd: 'public',
            src: '**',
            dest: 'dist'
        }
    },
    /* Limpa o diretório 'dist' */
    clean: {
        dist: {
            src: 'dist'
        }
    },

    useminPrepare: {
        html: 'dist/**/*.html'
    },

    usemin: {
        html: 'dist/**/*.html'
    },
    /* Mimifica img */
    imagemin: {
        public: {
            expand: true,
            cwd: 'dist/img',
            src: '**/*.{png,jpg,gif}',
            dest: 'dist/img'
        }
    },

    htmlmin: {
       dist: {
          options: {
             removeComments: true,
             collapseWhitespace: true
          },
          files: [{
            expand: true,
            cwd: 'public/',
            src: '**.html',
            dest: 'dist/'
          }]
       }
    },

    /* compila stylus */
    stylus: {
        compilar: {
            expand: true,
            cwd: 'public/stylus',
            src: ['**/*.styl'],
            dest: 'public/css',
            ext: '.css',
            options: {
                compress: false,
                paths: [
                        "node_modules/grunt-contrib-stylus/node_modules",
                        "node_modules/jeet/stylus"
                    ]
            }
        }
    },

    autoprefixer: {
        options: {
            browsers: ['last 2 versions', 'ie 8', 'ie 9']
        },
        dev: {
            src: 'public/css/*.css'
        }
    },

    watch: {
        stylus: {
            options: {
                event: ['added', 'changed']
            },
            files: 'public/stylus/**/*.styl',
            tasks: ['stylus:compilar' , 'autoprefixer:dev']
        },

    },

    browserSync: {
        public: {
            bsFiles: {
                src : ['public/**/*']
            },
            options: {
                watchTask: true,
                    server: {
                    baseDir: "public"
                }
            }
        }
    }


  });

    grunt.registerTask('server', ["browserSync", "watch"]);
    grunt.registerTask('dist', ['clean', 'copy']);
    grunt.registerTask('minifica', ['useminPrepare', 'concat', 'uglify', 'htmlmin', 'cssmin', /*'rev:minificados',*/ 'usemin', /*'imagemin'*/ ]);
    grunt.registerTask('default', ['dist', 'minifica']);

    // carregando tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
}