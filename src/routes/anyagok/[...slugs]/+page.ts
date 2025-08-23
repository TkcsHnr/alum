import resourcesJson from '$lib/resources.json';

interface Resource {
    id: string;
    name: string | number;
    children?: Resource[];
    url?: string;
    urls?: string[];
}

const resources: Resource[] = resourcesJson as Resource[];
const root: Resource = { id: 'anyagok', name: 'Feladatlapok', children: resources };

export function load({ params }) {
    const slugs = params.slugs ? params.slugs.split('/') : [];

    let currentResource: Resource = root;
    let children: Resource[] = resources;

    const breadcrumbs: { id: string; name: string | number }[] = [{ ...root }];

    for (const slug of slugs) {
        const match = children.find(r => r.id === slug);
        if (!match) break;

        currentResource = match;
        breadcrumbs.push({ id: match.id, name: match.name });
        children = match.children || [];
    }

    return {
        currentResource,
        breadcrumbs
    };
}
