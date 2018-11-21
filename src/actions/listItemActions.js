import * as constants from '../constants';

export const setLoadingListItem = (value) => ({type: constants.SET_LOADING_LIST_ITEM, payload: value });

export const toggleListItem = (id) => ({type: constants.LIST_ITEM_TOGGLE, payload: id });

export const setInitialListItem = (data) => ({type: constants.SET_INITIAL_LIST_ITEM, payload: data });
export const fetchInitialListItem = () => {
  return dispatch => {
    dispatch(setLoadingListItem(true));

    setTimeout(function() {
      const data = [
        {id: '1', name: '01 Layer', isActive: true},
        {id: '2', name: '01 Layer', isActive: false},
        {id: '3', name: '01 Layer', isActive: false}
      ];
      dispatch(setInitialListItem(data))
      dispatch(setLoadingListItem(false));
    }, 1000)
  };
};

export const editListItem = (data) => ({type: constants.EDIT_LIST_ITEM, payload: data });
export const fetchEditListItem = (data) => {
  return dispatch => {
    dispatch(setLoadingListItem(true));

    setTimeout(function() {
      dispatch(editListItem(data))
      dispatch(setLoadingListItem(false));
    }, 500)
  };
};

export const addNewListItem = () => ({type: constants.ADD_NEW_LIST_ITEM });
export const fetchAddNewListItem = (id) => {
  return dispatch => {
    dispatch(setLoadingListItem(true));

    setTimeout(function() {
      dispatch(addNewListItem(id))
      dispatch(setLoadingListItem(false));
    }, 500)
  };
};

export const removeListItem = (id) => ({type: constants.REMOVE_LIST_ITEM, payload: id });
export const fetchRemoveListItem = (id) => {
  return dispatch => {
    dispatch(setLoadingListItem(true));

    setTimeout(function() {
      dispatch(removeListItem(id))
      dispatch(setLoadingListItem(false));
    }, 500)
  };
};