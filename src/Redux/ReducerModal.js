let initialState = {
    openDialog: false,
    titleAlert: '',
    titleAlert3: '',
    openProfil: false,
    openDialog3: false
}

const ModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_DIALOG':
            return {
                ...state,
                openDialog: action.value
            }
        case 'CHANGE_DIALOG_REDI':
            return {
                ...state,
                openDialog3: action.value
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
        case 'CHANGE_TEXTDIALOG3':
            return {
                ...state,
                titleAlert3: action.value
            }
        default:
            return state
    }
}

export default ModalReducer