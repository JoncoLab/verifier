export const RENDER_ACTION = 'RENDER_ACTION';

export const RenderFilters = {
    RENDER_SIGN: 'RENDER_SIGN',
    RENDER_DASHBOARD: 'RENDER_DASHBOARD',
    RENDER_CABINET: 'RENDER_CABINET',
    RENDER_CONSTRUCTOR: 'RENDER_CONSTRUCTOR',
    RENDER_DOWNLOAD_LINKS: 'RENDER_DOWNLOAD_LINKS',
    RENDER_TEMPLATES: 'RENDER_TEMPLATES'
};

export function setRenderFilter(filter) {
    return {
        type: RENDER_ACTION,
        filter
    }
}