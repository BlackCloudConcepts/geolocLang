import { ActionReducer, Action } from '@ngrx/store';

import {List, Map} from 'immutable';

export const SET = 'SET';
export const UNSET = 'UNSET';
export const RESET = 'RESET';

export function setLocation(state, location) {
  return state.set('locations', List(location));
}

export const locationsReducer: ActionReducer<any> = (state: any = Map(), action: Action) => {
    switch (action.type) {
        case SET:
            console.log('reducer state');
            console.log(state);
            console.log(action.payload);
/* -- without immutable Map ... using pojo
              state = {
              latitude: action.payload.lat,
              longitude: action.payload.lng 
            }
            return state;
*/
            return setLocation(state, [{"locs": action.payload}]);
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

