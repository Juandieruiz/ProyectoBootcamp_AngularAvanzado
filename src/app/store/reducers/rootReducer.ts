import { ActionReducerMap } from "@ngrx/store";
import { IStore } from "../config/store.interface";
import { userReducer } from "./userReducer";

export const RootReducer: ActionReducerMap<IStore> = {

    userState: userReducer
}