import sanityClient from '@sanity/client'

const client = sanityClient({
	projectId: '44xy5weo',
	dataset: 'production',
	useCdn: true
})

export const getAllSlugs = async () => {
	const data = await client.fetch(`
		*[_type == 'post'] {
			slug
		}
	`)
	return data
}

export const getAllPosts = async () => {
	const data = await client.fetch(`
		*[_type == 'post'] {
			_id,
			title,
			slug,
			publishedAt,
			category,
			tags
		}
	`)
	return data
}

export const getPostsByCategory = async (cat) => {
	const data = await client.fetch(`
		*[_type == 'post' && category == ${cat}] {
			_id,
			title,
			slug,
			publishedAt,
			tags
		}
	`)
	return data
}

export const getPost = async (slug) => {
	const data = await client.fetch(
		`
		*[slug.current == $slug] {
			_id,
			title,
			publishedAt,
			category,
			tags,
			body
		}[0]
	`,
		{
			slug: slug
		}
	)
	return data
}
