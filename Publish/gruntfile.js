module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                email: 'screeps@alanc.net',
                password: 'Water1981!'
            },
            dist: {
                src: ['dist/*.js']
            }
        }
    });
};