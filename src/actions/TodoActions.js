import * as types from '../constants/ActionTypes';

export function addItem(content) {
    return {
        type: types.ADD_ITEM,
        content
    }
}

export function completeItem(id) {
    return {
        type: types.COMPLETE_ITEM,
        id
    }
}

export function deleteItem(id) {
    return {
        typs: types.DELETE_ITEM,
        id
    }
}
