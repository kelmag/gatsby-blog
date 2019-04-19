module.exports = {
  siteMetadata: {
    title: "Kelmag's",
    author: "Kelmag",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
