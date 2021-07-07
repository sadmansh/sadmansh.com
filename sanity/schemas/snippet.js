export default {
	name: 'snippet',
	title: 'Snippet',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96
			}
		},
		{
			name: 'category',
			title: 'Category',
			type: 'reference',
			to: [{ type: 'category' }]
		},
		{
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'tag' } }]
		},
		{
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime'
		},
		{
			name: 'body',
			title: 'Body',
			type: 'blockContent'
		}
	],

	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			media: 'mainImage'
		},
		prepare(selection) {
			const { author } = selection
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`
			})
		}
	}
}
