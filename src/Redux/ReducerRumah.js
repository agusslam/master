import Cookies from 'universal-cookie'
const cookies = new Cookies()
const getSel = cookies.get('_sel')
const getStep1 = cookies.get('_step1')
const getStep2 = cookies.get('_step2')
const getStep3 = cookies.get('_step3')
const getStep4 = cookies.get('_step4')
const getUploadFoto = cookies.get('_stepUploadFoto')
let initialState = ''

if (getSel && getStep1 && getStep2 && getStep3 && getStep4 && getUploadFoto) {
    initialState = {
        listRum: '',
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
        isUplodFoto: true,
        isUplodrk: true
    }
} else if (getSel && (getStep1 === null || getStep1 === undefined)) {
    initialState = {
        listRum: '',
        isLoading: false,
        isFil: true,
        isCentang: true,
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
        isUplodrk: false
    }
} else if (getSel && getStep1 && (getStep2 === null || getStep2 === undefined)) {
    initialState = {
        listRum: '',
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
        isUplodFoto: false,
        isUplodrk: false
    }
} else if (getSel && getStep1 && getStep2 && (getStep3 === null || getStep3 === undefined)){
    initialState = {
        listRum: '',
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
        isUplodFoto: false,
        isUplodrk: false
    }
} else if(getSel && getStep1 && getStep2 && getStep3 && (getUploadFoto === null || getUploadFoto === undefined)){
    initialState = {
        listRum: '',
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
        isUplodFoto: false,
        isUplodrk: false
    }
} else if (getSel && getStep1 && getStep2 && getStep3 && getUploadFoto && (getStep4 === null || getStep4 === undefined)){
    initialState = {
        listRum: '',
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
        isUplodFoto: true,
        isUplodrk: false
    }
} else {
    initialState = {
        listRum: '',
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
        isUplodrk: false
    }
}

const ReducerRum = (state = initialState, action) => {
    switch (action.type) {
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
        default:
            return state
    }
}

export default ReducerRum