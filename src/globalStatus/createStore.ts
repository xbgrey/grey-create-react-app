import { createStore, Store } from 'redux';

const undoable = require('redux-undo').default;
const includeAction = require('redux-undo').includeAction;

function todo(state: any, action: any) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
}

function todos(state: any[] = [], action: any) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t =>
                todo(t, action)
            );
        default:
            return state;
    }
}

const todoApp = undoable(todos, { filter: includeAction(['ADD_TODO', 'TOGGLE_TODO']) });

export default (): Store<any> => createStore(todoApp);