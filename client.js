import * as contentful from 'contentful'

export const client = contentful.createClient({
	space: process.env.CF_SPACE,
	accessToken: process.env.CF_API_KEY,
})
