export const MAIN_EVENT = 'MAIN_EVENT';

export function openMain(profileState) {
    return {
        type: MAIN_EVENT,
        profileState
    }
}