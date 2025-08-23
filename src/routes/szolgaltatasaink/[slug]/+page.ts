import type { PageLoad } from './$types';

import servicesJson from '$lib/services.json';

export const load = (async ({ params }) => {
    const service = servicesJson.find(s => s.id == params.slug);

    return { service };
}) satisfies PageLoad;