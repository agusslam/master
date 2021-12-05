import Cookies from 'universal-cookie'
const cookies = new Cookies()
const getSel = cookies.get('_sel')
const getStep1 = cookies.get('_step1')
const getStep2 = cookies.get('_step2')
const getStep3 = cookies.get('_step3')
const getStep4 = cookies.get('_step4')
const getUploadKTP = cookies.get('_ktp')
const getUploadFoto = cookies.get('_foto')
const getUploadRK = cookies.get('_rk')
const getUploadSlip = cookies.get('_slip')

let initialState = ''
// console.log(getStep2)

switch (true) {
    case ( (getSel !== undefined) && (getStep1 !== undefined) && (getStep2 === undefined) && (getUploadKTP === undefined) && (getUploadFoto === undefined) && (getStep3 === undefined) && (getUploadRK === undefined) && (getUploadSlip === undefined && (getStep4 === undefined)) ):
        initialState = {
            listRum: '',
            infoDebitur: '',
            isLoading: false,
            isFil: true,
            isCentang: true,
            circleStep1: true,
            persegiStep1: true,
            isFil2: false,
            circleStep2: false,
            persegiStep2: false,
            circleStep3: false,
            persegiStep3: false,
            circleStep4: false,
            isUplodfkpr: false,
            isUplodKTP: false,
            isFil3: false,
            isUplodFoto: 1,
            isUplodrk: false,
            isUplodslip: 1,
        }
    break;  
    
    case ( (getSel !== undefined) && (getStep1 !== undefined) && (getStep2 !== undefined) && (getUploadKTP === undefined) && (getUploadFoto === undefined) && (getStep3 === undefined) && (getUploadRK === undefined) && (getUploadSlip === undefined && (getStep4 === undefined)) ):
        initialState = {
            listRum: '',
            infoDebitur: '',
            isLoading: false,
            isFil: true,
            isCentang: true,
            circleStep1: true,
            persegiStep1: true,
            isFil2: true,
            circleStep2: true,
            persegiStep2: true,
            circleStep3: false,
            persegiStep3: false,
            circleStep4: false,
            isUplodfkpr: true,
            isUplodKTP: false,
            isFil3: false,
            isUplodFoto: 1,
            isUplodrk: false,
            isUplodslip: 1,
        }
    break; 
    
    case ( (getSel !== undefined) && (getStep1 !== undefined) && (getStep2 !== undefined) && (!getUploadKTP !== undefined) && (getUploadFoto === undefined) && (getStep3 === undefined) && (getUploadRK === undefined) && (getUploadSlip === undefined && (getStep4 === undefined)) ):
        initialState = {
            listRum: '',
            infoDebitur: '',
            isLoading: false,
            isFil: true,
            isCentang: true,
            circleStep1: true,
            persegiStep1: true,
            isFil2: true,
            circleStep2: true,
            persegiStep2: true,
            circleStep3: false,
            persegiStep3: false,
            circleStep4: false,
            isUplodfkpr: true,
            isUplodKTP: true,
            isFil3: false,
            isUplodFoto: 0,
            isUplodrk: false,
            isUplodslip: 1,
        }
    break; 

    case ( (getSel !== undefined) && (getStep1 !== undefined) && (getStep2 !== undefined) && (getUploadKTP !== undefined) && (getUploadFoto !== undefined) && (getStep3 !== undefined) && (getUploadRK === undefined) && (getUploadSlip === undefined && (getStep4 === undefined)) ):
        initialState = {
            listRum: '',
            infoDebitur: '',
            isLoading: false,
            isFil: true,
            isCentang: true,
            circleStep1: true,
            persegiStep1: true,
            isFil2: true,
            circleStep2: true,
            persegiStep2: true,
            circleStep3: true,
            persegiStep3: true,
            circleStep4: false,
            isUplodfkpr: true,
            isUplodKTP: true,
            isFil3: true,
            isUplodFoto: 2,
            isUplodrk: false,
            isUplodslip: 1,
        }
    break; 

    case ( (getSel !== undefined) && (getStep1 !== undefined) && (getStep2 !== undefined) && (getUploadKTP !== undefined) && (getUploadFoto !== undefined) && (getStep3 !== undefined) && (getUploadRK !== undefined) && (getUploadSlip === undefined && (getStep4 === undefined)) ):
        initialState = {
            listRum: '',
            infoDebitur: '',
            isLoading: false,
            isFil: true,
            isCentang: true,
            circleStep1: true,
            persegiStep1: true,
            isFil2: true,
            circleStep2: true,
            persegiStep2: true,
            circleStep3: true,
            persegiStep3: true,
            circleStep4: false,
            isUplodfkpr: true,
            isUplodKTP: true,
            isFil3: true,
            isUplodFoto: 2,
            isUplodrk: true,
            isUplodslip: 0,
        }
    break; 

    case ( (getSel !== undefined) && (getStep1 !== undefined) && (getStep2 !== undefined) && (getUploadKTP !== undefined) && (getUploadFoto !== undefined) && (getStep3 !== undefined) && (getUploadRK !== undefined) && (getUploadSlip !== undefined && (getStep4 !== undefined)) ):
        initialState = {
            listRum: '',
            infoDebitur: '',
            isLoading: false,
            isFil: true,
            isCentang: true,
            circleStep1: true,
            persegiStep1: true,
            isFil2: true,
            circleStep2: true,
            persegiStep2: true,
            circleStep3: true,
            persegiStep3: true,
            circleStep4: true,
            isUplodfkpr: true,
            isUplodKTP: true,
            isFil3: true,
            isUplodFoto: 2,
            isUplodrk: true,
            isUplodslip: 2,
        }
    break; 

    default:
        initialState = {
            listRum: '',
            infoDebitur: '',
            isLoading: false,
            isFil: false,
            isCentang: false,
            circleStep1: false,
            persegiStep1: false,
            isFil2: false,
            circleStep2: false,
            persegiStep2: false,
            circleStep3: false,
            persegiStep3: false,
            circleStep4: false,
            isUplodfkpr: false,
            isUplodKTP: false,
            isFil3: false,
            isUplodFoto: false,
            isUplodrk: false,
            isUplodslip: 1,
        }
}

const ReducerRum = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_RUMAH':
            return {
                ...state,
                listRum: action.value
            }
        case 'GET_DEBITUR':
            return {
                ...state,
                infoDebitur: action.value
            }
        case 'CHANGE_LOADING':
            return {
                ...state,
                isLoading: action.value
            }
        case 'CHANGE_NEXT':
            return {
                ...state,
                isFil: action.value
            }
        case 'CHANGE_NEXT2':
            return {
                ...state,
                isFil2: action.value
            }
        case 'CHANGE_NEXT3':
            return {
                ...state,
                isFil3: action.value
            }
        case 'CHANGE_NEXT4':
            return {
                ...state,
                isFil4: action.value
            }
        case 'CHANGE_CHECK':
            return {
                ...state,
                isCentang: action.value
            }
        case 'CHANGE_STEP1':
            return {
                ...state,
                circleStep1: action.value,
                persegiStep1: action.value
            }
        case 'CHANGE_STEP2':
            return {
                ...state,
                circleStep2: action.value,
                persegiStep2: action.value
            }
        case 'CHANGE_STEP3':
            return {
                ...state,
                circleStep3: action.value,
                persegiStep3: action.value
            }
        case 'CHANGE_STEP4':
            return {
                ...state,
                circleStep4: action.value,
                persegiStep4: action.value
            }
        case 'CHANGE_UPLOAD':
            return {
                ...state,
                isUplodfkpr: action.value
            }
        case 'CHANGE_UPLOADKTP':
            return {
                ...state,
                isUplodKTP: action.value
            }
        case 'CHANGE_UPLOADFOTO':
            return {
                ...state,
                isUplodFoto: action.value
            }
        case 'CHANGE_UPLOADRK':
            return {
                ...state,
                isUplodrk: action.value
            }
        case 'CHANGE_UPLOADSLIP':
            return {
                ...state,
                isUplodslip: action.value
            }
        default:
            return state
    }
}

export default ReducerRum