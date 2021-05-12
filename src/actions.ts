import { Action, ActionCreator } from 'redux';

export const toggleMenuAction = () => ({ type: 'toggle_menu' });
export const closeMenuAction = () => ({ type: 'close_menu' });
export const selectCompanyAction = (payload:{index:number}) => ({ type: 'select_company',payload });