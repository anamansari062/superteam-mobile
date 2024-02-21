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
		sub_title: project.sub_title,
		post_description: project.post_description,
		tags: project.tags,
		socials: project.socials,
		view: project.view
	}
}