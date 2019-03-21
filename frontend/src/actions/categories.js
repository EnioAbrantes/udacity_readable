export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export function receiveCategories (name, path){
    return {
        type : RECEIVE_CATEGORIES,
        name,
        path,
    }
}