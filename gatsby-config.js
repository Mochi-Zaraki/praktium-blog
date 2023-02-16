/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
    discription: "hahahahahaha"
  },
  plugins: ["gatsby-plugin-sass",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: __dirname+"/src/pages",
        name: "pages"
      }
    },
    "gatsby-transformer-remark"
  ]
};