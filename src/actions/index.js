
export const GetAllData = (data) => dispatch => {
    dispatch({
        type: 'GET_ALL_POST',
        payload: data
    });

}

export const GetOneData = (id) => dispatch =>{
    
    dispatch({
        type: 'GET_ONE_POST',
        payload: id
    });
}

export const AddData = (data) => dispatch =>{
    dispatch({
        type: 'ADD_POST',
        payload: data
    });
}

export const HandleUrl = (url) => dispatch =>{
    dispatch({
        type: 'URL',
        payload: url
    });
}
export const UpdateData = (data) =>dispatch=>{
    dispatch({
        type: 'EDIT_POST',
        payload: data
    });
}
export const DeleteData = (id) =>dispatch=>{
    dispatch({
        type: 'DELETE_POST',
        payload: id
    });
}
