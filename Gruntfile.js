var fs = require("fs")

/**
 * Configuration part of following grunt tasks
 */

var STYLE_FILES = [
	'public/styles/screen.styl'
]

var JS_FILES = [
	'public/js/index.js'
]

var DIST_FOLDER = 'public/build'

var HASH_SOURCES = [
]

var WATCH_FILES = [
	DIST_FOLDER + '/*',
	'public/*.html'
]


/**
 * Grunt project itself with defined tasks and theirs options
 */
module.exports = function(grunt) {
	grunt.initConfig({

		// Clean dist folder from obsolote files
		clean: {
			dist: DIST_FOLDER + '/*'
		},

		copy: {

		},

		// Compile Stylus styles into CSS
		stylus: {

			dev: {
				options: {
					'include css': true,
					compress: false
				},
				expand: true,
				flatten: true,
				src: STYLE_FILES,
				dest: DIST_FOLDER + '/',
				ext: '.css'
			},

			dist: {
				options: {
					'include css': true
				},
				expand: true,
				flatten: true,
				src: STYLE_FILES,
				dest: DIST_FOLDER + '/',
				ext: '.css'
			}

		},

		// Concat and minify JavaScript files to signel app.js file
		browserify: {

			options: {
				transform: ['coffeeify', 'reactify', 'browserify-shim', 'uglifyify'],
				external: ['jquery']
			},

			dev: {
				options: {
					debug: true,
					transform: ['coffeeify', 'reactify', 'browserify-shim']
				},
				src: JS_FILES,
				dest: DIST_FOLDER + '/app.js'
			},

			dist: {
				src: JS_FILES,
				dest: DIST_FOLDER + '/app.js'
			}

		},

		// Minify CSS even more, every byte counts
		cssmin: {
			dist: {
				expand: true,
				cwd: DIST_FOLDER + '/',
				src: '*.css',
				dest: DIST_FOLDER + '/'
			}
		},

		// Rename resource files based on theirs content to prevent cache colisions
		hashres: {

			dist: {
				// expand: true,
				src: HASH_SOURCES,
				dest: DIST_FOLDER + '/*.html'
			}

		},

		// Development mode with resources auto reload and browser actions synchronizations
		browserSync: {

			dev: {
				options: {
					watchTask: true,
					debugInfo: true,
					// Only static files
					server: {
						baseDir: 'public'
					},
					// Dynamic files (PHP etc) - proxy to running server
					// proxy: 'localhost',
					ghostMode: {
						clicks: true,
						scroll: true,
						links: false,
						forms: true
					}
				},
				bsFiles: {
					src: WATCH_FILES
				}
			}

		},

		// Watch sources for change and compile them. Starts Livereload server as fallback of browserSync.
		watch: {

			options: {
				spawn: false
			},

			styles: {
				files: 'public/styles/**/*.styl',
				tasks: 'stylus:dev'
			},

			js: {
				files: ['public/js/**', 'public/components/**/*.jsx'],
				tasks: 'browserify:dev'
			},

			livereload: {
				files: WATCH_FILES,
				options: {
					livereload: true
				}
			}

		}

	})

	// Load plugins
	grunt.loadNpmTasks('grunt-browser-sync')
	grunt.loadNpmTasks('grunt-browserify')
	grunt.loadNpmTasks('grunt-contrib-clean')
	grunt.loadNpmTasks('grunt-contrib-copy')
	grunt.loadNpmTasks('grunt-contrib-cssmin')
	grunt.loadNpmTasks('grunt-contrib-stylus')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-hashres')
	grunt.loadNpmTasks('grunt-notify')

	// Register tasks
	grunt.registerTask('default', ['clean:dist', 'stylus:dist', 'browserify:dist', 'cssmin:dist', 'hashres:dist'])
	grunt.registerTask('dev', ['clean:dist', 'stylus:dev', 'browserify:dev', 'browserSync:dev', 'watch'])

}
