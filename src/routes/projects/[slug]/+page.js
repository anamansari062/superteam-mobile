import projects from '$lib/data.js';
import { error } from '@sveltejs/kit';
export function load({params}) {
	const project = projects.find((project) => project.slug === params.slug);
	if (!project) {
		error(404, 'Project not found')
	}
	return {
		name:project.name,
		post_name: project.post_name,
		tagline: project.tagline,
		about: project.about,
		tags: project.tags,
		socials: project.socials,
		view: project.view
	}
}