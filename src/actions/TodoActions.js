import * as types from '../constants/ActionTypes';

export function addItem(entity) {
    return {
        type: types.ADD_ITEM,
        entity
    };
}

export function completeItem(id) {
    return {
        type: types.COMPLETE_ITEM,
        id
    };
}

export function deleteItem(id) {
    return {
        type: types.DELETE_ITEM,
        id
    };
}

export function updateItem(entity) {
    return {
        type: types.UPDATE_ITEM,
        entity
    };
}
