let initialState = {
    openDialog: false,
    titleAlert: '',
    openProfil: false
}

const ModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_DIALOG':
            return {
                ...state,
                openDialog: action.value
            }
        case 'CHANGE_PROFIL':
            return {
                ...state,
                openProfil: action.value
            }
        case 'CHANGE_TEXTDIALOG':
            return {
                ...state,
                titleAlert: action.value
            }
        default:
            return state
    }
}

export default ModalReducer