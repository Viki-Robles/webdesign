module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        stylesConfig: {
          // disableAutoprefixing: true,
          // disableMinification: true
        },
      },
    },
  ],
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
  ],
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `none`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        
      },
      // plugins: [
      //   {
      //     resolve: `gatsby-transformer-remark`,
      //     options: {
      //       plugins: [
      //         {
      //           resolve: `gatsby-remark-prismjs`,
      //           options: {
      //             // Class prefix for <pre> tags containing syntax highlighting;
      //             // defaults to 'language-' (e.g. <pre class="language-js">).
      //             // If your site loads Prism into the browser at runtime,
      //             // (e.g. for use with libraries like react-live),
      //             // you may use this to prevent Prism from re-processing syntax.
      //             // This is an uncommon use-case though;
      //             // If you're unsure, it's best to use the default value.
      //             classPrefix: "language-",
      //             // This is used to allow setting a language for inline code
      //             // (i.e. single backticks) by creating a separator.
      //             // This separator is a string and will do no white-space
      //             // stripping.
      //             // A suggested value for English speakers is the non-ascii
      //             // character '›'.
      //           }}]}}]
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
