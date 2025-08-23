import type { PageLoad } from './$types';

import services from '$lib/services.json';

export const load = (async () => {
    return { services };
}) satisfies PageLoad;