import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({  request }) => {
		const data = await request.formData();

        console.log(data);
		
		return { success: true };
	},
} satisfies Actions;