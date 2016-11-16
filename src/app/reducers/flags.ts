import { ActionReducer, Action } from '@ngrx/store';

export const SETFLAG = 'SETFLAG';
export const UNSET = 'UNSET';
export const RESET = 'RESET';

export const flagsReducer: ActionReducer<any> = (state: any = {}, action: Action) => {
    switch (action.type) {
        case SETFLAG:
            console.log('reducer state flags!');
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

