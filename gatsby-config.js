module.exports = {
    siteMetadata: {
        title: `Ricardo Juárez`,
        titleTemplate: '%s · Ricardo Juárez',
        description: `Software engineer with a passion for Web Applications development`,
        author: `RichieSjt`,
        siteUrl: `https://richiesjt.github.io`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
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
                name: `Ricardo Juárez`,
                start_url: `/`,
                background_color: `#323232`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                cssLoaderOptions: {
                    camelCase: true,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /icons/,
                },
            },
        },
    ],
}
