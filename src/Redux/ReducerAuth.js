import Cookies from 'universal-cookie'
import jwt from 'jsonwebtoken'

const cookies = new Cookies()
const token = cookies.get('_tKJKASKHDS')
let initialState = ''

if (token) {
    const aku = jwt.decode(token)
    const timeExp = new Date(aku.exp * 1000)
    if (timeExp < Date.now()) {        
        initialState = {
            user: '',
            isLoading: false,
            isLoggedIn: false,
            akses: '',
            infoDebi: ''
        }

    } else {
        console.log("enggak kok")
        console.log(aku.role)
        initialState = {
            user: aku.username,
            isLoading: false,
            isLoggedIn: true,
            token: token,
            akses: aku.role,
            infoDebi: ''
        }
    }
} else {
    initialState = {
        user: '',
        isLoading: false,
        isLoggedIn: false,
        akses: '',
        infoDebi: ''
    }
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_LOGIN':
            return {
                ...state,
                isLoggedIn: action.value,
                akses: action.value
            }
        case 'CHANGE_LOADING':
            return {
                ...state,
                isLoading: action.value
            }
        case 'GET_INFODEBITUR':
            return {
                ...state,
                isLoading: action.value
            }
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
                user: ''
            }    
        default:
            return state
    }
}

export default AuthReducer