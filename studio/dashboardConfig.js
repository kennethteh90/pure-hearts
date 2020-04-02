export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e85d7537d20fe4deb13cc18',
                  title: 'Sanity Studio',
                  name: 'pure-hearts-studio',
                  apiId: '739c2e48-be00-43a8-8d65-17f3935e4199'
                },
                {
                  buildHookId: '5e85d7531dbbbb6071495cf4',
                  title: 'Blog Website',
                  name: 'pure-hearts',
                  apiId: '88f44815-18c0-4da9-b739-cd5dab0e3dca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kennethteh90/pure-hearts',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://pure-hearts.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
