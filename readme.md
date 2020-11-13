# gatsby-plugin-static-workspaces
Lets you add additional static folders to your site. Based on gatsby-plugin-static-folders, 
by providing the destination public-path, this plugin is safe to use (yarn) workspaces 
where the `node_modules` is potentially not a sibling of `gatsby-config.js`.

`gatsby-config.js`
```
{
  plugins: [
    {
      resolve: 'gatsby-plugin-static-assets',
      options: {
        folders: [
          './images',
          './downloads',
        ]
        public: `${__dirname}/public`,
      }
    }
  ]
}
```

This will merge the two folders `images` and `downloads` into the output `public` folder.
