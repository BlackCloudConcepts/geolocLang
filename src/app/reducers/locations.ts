import { ActionReducer, Action } from '@ngrx/store';

export const SET = 'SET';
export const UNSET = 'UNSET';
export const RESET = 'RESET';

export const locationsReducer: ActionReducer<any> = (state: any = {}, action: Action) => {
    switch (action.type) {
        case SET:
            console.log('reducer state');
            console.log(action.payload);
            state = {
              latitude: action.payload.lat,
              longitude: action.payload.lng 
            }
            return state;
        case UNSET:
            state = {};
            return state;
        case RESET:
            state = {};
            return state;
        default:
            return state;
    }
}

