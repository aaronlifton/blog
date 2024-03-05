export { renderers } from '../renderers.mjs';

const page = () => import('./pages/about_Toot-axz.mjs').then(n => n.h);

export { page };
