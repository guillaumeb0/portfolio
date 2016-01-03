module.exports = function (grunt) {

    grunt.initConfig({
        responsive_images: {
            dev_general: {
                options: {
                    engine: 'im',
                    sizes: [{
                        name: 'medium',
                        width: '600',
                        suffix: '_2x',
                        quality: 40
                    }, {
                        name: 'medium',
                        width: '300',
                        suffix: '_1x',
                        quality: 40
                    }
                    ]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'img_src/',
                    dest: 'img/'
                }]
            },
            dev_logo: {
                options: {
                    engine: 'im',
                    sizes: [{
                        name: 'large',
                        width: '300',
                        suffix: '_2x',
                        quality: 20
                    }, {
                        name: 'large',
                        width: '150',
                        suffix: '_1x',
                        quality: 40
                    }, {
                        name: 'medium',
                        width: '240',
                        suffix: '_2x',
                        quality: 40
                    }, {
                        name: 'medium',
                        width: '120',
                        suffix: '_1x',
                        quality: 40
                    }, {
                        name: 'small',
                        width: '140',
                        suffix: '_2x',
                        quality: 40
                    }, {
                        name: 'small',
                        width: '70',
                        suffix: '_1x',
                        quality: 40
                    }
                    ]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'img_src/logo/',
                    dest: 'img/'
                }]
            },
            dev_theme_logo: {
                options: {
                    engine: 'im',
                    sizes: [{
                        name: 'x-large',
                        width: '2800',
                        height: '300',
                        suffix: '_2x',
                        quality: 20
                    }, {
                        name: 'x-large',
                        width: '1400',
                        height: '300',
                        suffix: '_1x',
                        quality: 40
                    }, {
                        name: 'large',
                        width: '1880',
                        height: '300',
                        suffix: '_2x',
                        quality: 20
                    }, {
                        name: 'large',
                        width: '940',
                        height: '300',
                        suffix: '_1x',
                        quality: 40
                    }, {
                        name: 'medium',
                        width: '1200',
                        height: '200',
                        suffix: '_2x',
                        quality: 40
                    }, {
                        name: 'medium',
                        width: '600',
                        height: '200',
                        suffix: '_1x',
                        quality: 40
                    }
                    ]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'img_src/theme/',
                    dest: 'img/'
                }]
            }
        },
        /* Clear out the images directory if it exists */
        clean: {
            dev: {
                src: ['img'],
            },
        },

        /* Generate the images directory if it is missing */
        mkdir: {
            dev: {
                options: {
                    create: ['img']
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    //grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};