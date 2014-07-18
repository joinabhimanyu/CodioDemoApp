module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {
            // 2. Configuration for concatinating files goes here.
            dynamic: {
                files: [{
                    expand: true,
            		cwd: 'public/images/src/',
            		src: ['**/*.{png,jpg,gif}'],
            		dest: 'public/images/build/'
                }]
            },
        },
        
        uglify: {
            scripts: {
                files: [{
                    expand: true,
          			cwd: 'public/js/scripts/',
          			src: ['**/*.js'],
          			dest: 'public/js/minified/',
                    ext: '.min.js',
                    extDot: 'first'
                }]
            },
        },
        
        sass: {
    		dist: {
      			files: [{
        		expand: true,
        		cwd: 'public/stylesheets/sass',
        		src: ['*.scss'],
        		dest: 'public/stylesheets/css',
        		ext: '.css'
      			}]
    		},
  		},
        
//         compass: {
//             dev: {
//                 options: {
//                     sassDir: 'public/stylesheets/sass',
//                     cssDir: 'public/stylesheets/css'
//                 }
//             },
//         },
        
        cssmin: {
            minify: {
                expand: true,
                cwd: 'public/stylesheets/css',
                src: ['*.css', '!*.min.css'],
                dest: 'public/stylesheets/css',
                ext: '.min.css'
            },
        },
        
        watch: {
            scripts: {
                files: ['public/js/sripts/*.js'],
        		tasks: ['uglify'],
       		 	options: {
            	spawn: false,
        		},
            },
                     
                     compile: {
                     	files: ['public/stylesheets/sass/*.scss'],
        				tasks: ['sass'],
       		 			options: {
            			spawn: false,
        				},
                     },
                     
                     minify: {
                     	files: ['public/stylesheets/css/*.css'],
        				tasks: ['cssmin'],
       		 			options: {
            			spawn: false,
        				},
                     },
            
            images: {
                files: ['public/images/src/**/*.{png,jpg,gif}'],
                tasks: ['imagemin'],
                options: {
                    spawn: false,  
                },
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    //grunt.loadNpmTasks('grunt-contrib-compass');
    //grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['imagemin', 'uglify', 'sass', 'cssmin', 'watch']);

};