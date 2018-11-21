import * as constants from '../constants';

const initialState = {
    loading: false,
    itemList: [],
};

export default function listReducer(state = initialState, action) {
	switch(action.type) {
        case constants.SET_LOADING_LIST_ITEM: {
            return {
                ...state,
                loading: action.payload,
            }
        }

        case constants.SET_INITIAL_LIST_ITEM: {
            return {
                ...state,
                itemList: action.payload,
            }
        }
        
        case constants.LIST_ITEM_TOGGLE: {
            const newItemList = state.itemList.map(item => {
                if(item.id !== action.payload) return item;
                
                const newItem = {...item};
                newItem.isActive = !newItem.isActive;
                return newItem;
            });
            return {
                ...state,
                itemList: newItemList,
            }
        }

        case constants.ADD_NEW_LIST_ITEM: {
            const newItemList = [...state.itemList];
            newItemList.push({
                id: Date.now(),
                name: '01 Layer',
                isActive: false
            });
            return {
                ...state,
                itemList: newItemList,
            }
        }
           
        case constants.EDIT_LIST_ITEM: {
            const newItemList = state.itemList.map(item => {
                if(item.id !== action.payload.id) return item
                const newItem = {...item};
                newItem.name = action.payload.name;
                return newItem;
            });
            return {
                ...state,
                itemList: newItemList,
            }
        }

        case constants.REMOVE_LIST_ITEM: {
            const newItemList = state.itemList.filter(item => {
                if(item.id !== action.payload) return item;
                return null;
            });
            return {
                ...state,
                itemList: newItemList,
            }
        }

        default:
            return state;
    }
}