module.exports = function(grunt) {
	// load grunt tasks based on dependencies in package.json
	require('load-grunt-tasks')(grunt);

	grunt.config.init({
	  clean: ['.tmp', 'dist'],
	  useminPrepare: {
	      html: ['index.html','index2.html'],
	      options: {
	        dest: 'dist'
	      }
	  },
	  usemin:{
	  	html:['dist/index.html','dist/index2.html']
	  },
	  copy:{
	    html: {
            src: ['**/*.html','!**/node_modules/**','!**/.tmp/**'],
            expand: true,
            dest: 'dist',
	    }
	  }
	});

	grunt.registerTask('default',[
		'clean',
		'copy:html',
		'useminPrepare',
		'concat',
		'uglify',
		'cssmin',
		'usemin'
    ]);
}

