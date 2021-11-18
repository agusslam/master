const initialState = {
    user: '',
}

const UserReduc = (state = initialState, action) => {
    switch(action.type){
        case 'CHANGE_PROFIL':
            return{
                ...state,
                user: action.value
            }
        default:
            return state
    }
}

export default UserReduc