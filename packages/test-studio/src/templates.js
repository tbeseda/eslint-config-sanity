import T from '@sanity/base/template-builder'

export default [
  ...T.defaults(),

  T.template({
    id: 'author-developer',
    title: 'Developer (author)',
    schemaType: 'author',
    value: {
      role: 'developer'
    }
  })
]