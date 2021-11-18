const initialState = {
    listRum : '',
    isLoading: false
}

const ReducerRum = (state = initialState, action) => {
    switch(action.type){
        case 'GET_RUMAH':
            return {
                ...state,
                listRum: action.value 
            }
        case 'CHANGE_LOADING':
            return {
                ...state,
                isLoading: action.value
            }
        default:
            return state
    }
}   

export default ReducerRum