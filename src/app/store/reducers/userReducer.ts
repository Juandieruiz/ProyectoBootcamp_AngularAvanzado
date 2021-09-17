import { Action } from "@ngrx/store";
import { ACTION_CAMBIO_APELLIDO, ACTION_CAMBIO_NOMBRE } from "../actions/userActions";
import { IUserState } from "../states/userState.interface";

const userStateInicial: IUserState = {
    nombre: 'Juan Diego',
    apellido: 'Gomez Ruiz'
}

export function userReducer(state = userStateInicial, action: Action): IUserState {


        switch (action.type) {
            case ACTION_CAMBIO_NOMBRE:
                
                return{
                    ...state,
                    nombre: action.type
                }

            case ACTION_CAMBIO_APELLIDO:
        
                return{
                    ...state,
                    nombre: action.type
                }
                
        }

        return state;
}