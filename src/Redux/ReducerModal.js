let initialState = {
    openDialog: false,
    titleAlert: ''
}

const ModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_DIALOG':
            return {
                ...state,
                openDialog: action.value
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