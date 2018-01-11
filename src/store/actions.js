export const RENDER_ACTION = 'RENDER_ACTION';

export const RenderFilters = {
    RENDER_SIGN: 'RENDER_SIGN',
    RENDER_DASHBOARD: 'RENDER_DASHBOARD',
    RENDER_CABINET: 'RENDER_CABINET',
    RENDER_CONSTRUCTOR: 'RENDER_CONSTRUCTOR'
};

export function setRenderFilter(filter) {
    return {
        type: RENDER_ACTION,
        filter
    }
}

export const SIGN_ACTION = 'SIGN_ACTION';

export function switchSign(active) {
    return {
        type: SIGN_ACTION,
        active
    }
}