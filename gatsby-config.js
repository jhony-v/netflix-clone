const path = require('path');

module.exports = {
  pathPrefix: "/netflix-clone",
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: './netflix-logo.png',
        name: `Netflix Clone`,
        short_name: `Netflix Clone`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`,
      },
    },
    {
        resolve: 'gatsby-plugin-root-import',
        options: {
          pages: path.join(__dirname, 'src/pages'),
          components: path.join(__dirname, 'src/components'),
          containers: path.join(__dirname, 'src/containers'),
          config: path.join(__dirname, 'src/config'),
          lib: path.join(__dirname, 'src/lib'),
          modules: path.join(__dirname, 'src/modules'),
          hooks: path.join(__dirname, 'src/hooks'),
          images: path.join(__dirname, 'src/images'),
          data: path.join(__dirname, 'src/data'),
          store: path.join(__dirname, 'src/store'),
        }
    }
  ],
}
