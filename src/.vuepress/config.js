const { description } = require('../../package')

module.exports = {
    title: 'ARCPG',
    description: description,
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],

    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [{
                text: 'Generator',
                link: '/',
            },
            {
                text: 'How to Use',
                link: '/manual/'
            },
            {
                text: 'Gallery',
                link: '/gallery/'
            }
        ],
        sidebar: {
            '/manual/': [{
                title: 'How to use the generator',
                collapsable: false,
                children: [
                    '',
                ]
            }],
        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: []
}