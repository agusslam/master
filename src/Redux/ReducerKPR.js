let initialState = {
    listKPR : '',
    getDeb: '',
    pengajuan: '',
    administrasi: '',
    aksep: '',
    slik: '',
    legal: '',
    komite: '',
    setuju: ''
}
const ReducerKPR = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_KPR':
            return {
                ...state,
                listKPR: action.value
            }
        case 'GET_DATADEBITUR':
            return {
                ...state,
                getDeb: action.value
            }
        case 'GET_DEBITUR':
            return {
                ...state,
                getDeb: action.value
            }
        case 'CHANGE_PENGAJUANSTEP':
            return {
                ...state,
                pengajuan: action.value
            }
        case 'CHANGE_ADMINSTEP':
            return {
                ...state,
                administrasi: action.value
            }
        case 'CHANGE_AKSEPSTEP':
            return {
                ...state,
                aksep: action.value
            }
        case 'CHANGE_SLIKSTEP':
            return {
                ...state,
                slik: action.value
            }  
        case 'CHANGE_LEGALSTEP':
            return {
            ...state,
            legal: action.value
        }    
        case 'CHANGE_KOMITESTEP':
        return {
            ...state,
            komite: action.value
        }  
        case 'CHANGE_SETUJUSTEP':
        return {
            ...state,
            setuju: action.value
        }               
        default:
            return state
    }
}

export default ReducerKPR