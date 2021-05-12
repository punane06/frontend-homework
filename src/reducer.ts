import { combineReducers } from 'redux';

const initialState:{open:boolean;companies:string[];selectedCompany:number} = {
	open: false,
	companies: [  'Viljatootja AS','Tartu Agro OÜ' ],
	selectedCompany: 0
};

const menuReducer = (state = initialState, action: any) => {
	// The reducer normally looks at the action type field to decide what happens
	switch (action.type) {
		case 'toggle_menu':
			return { ...state, open: !state.open };
		case 'close_menu':
			return { ...state, open: false };

		case 'select_company':
			return { ...state, selectedCompany: action.payload.index, open: false };
		// Do something here based on the different types of actions
		default:
			// If this reducer doesn't recognize the action type, or doesn't
			// care about this specific action, return the existing state unchanged
			return state;
	}
};
export default combineReducers({ menu: menuReducer });
