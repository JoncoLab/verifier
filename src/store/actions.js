export const MAIN_EVENT = 'MAIN_EVENT';

export function openMain (menuMood) {
    return {
        type: MAIN_EVENT,
        menuMood
    }
}