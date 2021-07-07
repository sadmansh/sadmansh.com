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
			tags[]->{_id, title, slug}
		}
	`)
	return data
}

export const categoryQuery = async (slug) => {
	const data = await client.fetch(
		`
		*[_type == 'category' && slug.current == $slug] {
			title,
			slug,
			'posts': *[_type == 'post' && references(^._id)] {
				_id,
				title,
				slug,
				publishedAt,
				tags[]->{_id, title, slug}
			}
		}[0]
	`,
		{ slug: slug }
	)
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
