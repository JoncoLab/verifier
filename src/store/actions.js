export const RENDER_ACTION = 'RENDER_ACTION';

export const RenderFilters = {
    SHOW_SIGN: 'SHOW_SIGN',
    SHOW_DASHBOARD: 'SHOW_DASHBOARD',
    SHOW_CABINET: 'SHOW_CABINET'
};

export function setRenderFilter(filter) {
    return {
        type: RENDER_ACTION,
        filter
    }
}