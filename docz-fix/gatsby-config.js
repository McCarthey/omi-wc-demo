const { merge } = require('lodash/fp')
const path = require('path')


let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  siteMetadata: {
    title: 'Omi Wc Demo',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: 'C:\\practice\\omi-wc-demo\\.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        ignore: [{}, {}, {}, {}, {}],
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Omi Wc Demo',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        themeConfig: {},
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        paths: {
          root: 'C:\\practice\\omi-wc-demo',
          templates:
            'C:\\practice\\omi-wc-demo\\node_modules\\docz-core\\dist\\templates',
          packageJson: 'C:\\practice\\omi-wc-demo\\package.json',
          docz: 'C:\\practice\\omi-wc-demo\\.docz',
          cache: 'C:\\practice\\omi-wc-demo\\.docz\\.cache',
          app: 'C:\\practice\\omi-wc-demo\\.docz\\app',
          appPublic: 'C:\\practice\\omi-wc-demo\\.docz\\public',
          appNodeModules: 'C:\\practice\\omi-wc-demo\\node_modules',
          appPackageJson: 'C:\\practice\\omi-wc-demo\\package.json',
          appYarnLock:
            'C:\\practice\\omi-wc-demo\\node_modules\\docz-core\\yarn.lock',
          ownNodeModules:
            'C:\\practice\\omi-wc-demo\\node_modules\\docz-core\\node_modules',
          gatsbyConfig: 'C:\\practice\\omi-wc-demo\\gatsby-config.js',
          gatsbyBrowser: 'C:\\practice\\omi-wc-demo\\gatsby-browser.js',
          gatsbyNode: 'C:\\practice\\omi-wc-demo\\gatsby-node.js',
          gatsbySSR: 'C:\\practice\\omi-wc-demo\\gatsby-ssr.js',
          importsJs: 'C:\\practice\\omi-wc-demo\\.docz\\app\\imports.js',
          rootJs: 'C:\\practice\\omi-wc-demo\\.docz\\app\\root.jsx',
          indexJs: 'C:\\practice\\omi-wc-demo\\.docz\\app\\index.jsx',
          indexHtml: 'C:\\practice\\omi-wc-demo\\.docz\\app\\index.html',
          db: 'C:\\practice\\omi-wc-demo\\.docz\\app\\db.json',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          'docz': path.resolve(__dirname, 'src/docz-proxy.js'),
          '@docz': require.resolve('docz')
        },
      },
    }
  ],
}

module.exports = merge(config, custom)
