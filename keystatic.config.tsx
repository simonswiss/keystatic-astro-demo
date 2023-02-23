import { collection, fields, config } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    blog: collection({
      label: 'Blog',
      directory: 'src/content/blog',
      getItemSlug: (data) => data.slug,
      schema: {
        title: fields.text({ label: 'Title' }),
        slug: fields.text({ label: 'Slug', validation: { length: { min: 2 } } }),
        description: fields.text({ label: 'Description', multiline: true }),
        pubDate: fields.date({ label: 'Published date' }),
        heroImage: fields.image({ label: 'Hero image' }),
        content: fields.document({
          label: 'Content',
        }),
      },
    }),
  },
})
