import Axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()
const token = cookies.get('_tKJKASKHDS')

const API_URL = 'http://localhost:8008'
const Header = { headers: { Authorization: `Bearer ${token}` } }

export const getRumah = () => async (dispatch) => {
    try {
        dispatch({ type: 'CHANGE_LOADING', value: true })
        const res = await Axios.get(API_URL + '/house')
        console.log(res)
        dispatch({ type: 'CHANGE_LOADING', value: false })
        dispatch({ type: 'GET_RUMAH', value: res.data })
        return Promise.resolve(res.data)
    } catch (error) {
        return Promise.reject(error)
    }
}

export const Uploadfkpr = (data) => async (dispatch) => {
    try {
        dispatch({ type: 'CHANGE_LOADING', value: true })
        const res = await Axios.post(API_URL + '/upload/formkpr', data, Header)
        dispatch({ type: 'CHANGE_LOADING', value: false })
        dispatch({ type: 'CHANGE_UPLOAD', value: true })
        return Promise.resolve(res.data)
    } catch (error) {
        return Promise.reject(error)
    }
} 

export const Uploadktp = (data) => async (dispatch) => {
    try {
        dispatch({ type: 'CHANGE_LOADING', value: true })
        const res = await Axios.post(API_URL + '/upload/ektp', data, Header)
        dispatch({ type: 'CHANGE_LOADING', value: false })
        return Promise.resolve(res.data)
    } catch (error) {
        return Promise.reject(error)
    }
} 

export const Uploadfoto = (data) => async (dispatch) => {
    try {
        dispatch({ type: 'CHANGE_LOADING', value: true })
        const res = await Axios.post(API_URL + '/upload/foto', data, Header)
        dispatch({ type: 'CHANGE_LOADING', value: false })
        return Promise.resolve(res.data)
    } catch (error) {
        return Promise.reject(error)
    }
} 

export const Uploadrk = (data) => async (dispatch) => {
    try {
        dispatch({ type: 'CHANGE_LOADING', value: true })
        const res = await Axios.post(API_URL + '/upload/rk', data, Header)
        dispatch({ type: 'CHANGE_LOADING', value: false })
        return Promise.resolve(res.data)
    } catch (error) {
        return Promise.reject(error)
    }
} 

export const UploadSlip = (data) => async (dispatch) => {
    try {
        dispatch({ type: 'CHANGE_LOADING', value: true })
        const res = await Axios.post(API_URL + '/upload/slip', data, Header)
        dispatch({ type: 'CHANGE_LOADING', value: false })
        return Promise.resolve(res.data)
    } catch (error) {
        return Promise.reject(error)
    }
} 

export const CreateKPR = (data) => async (dispatch) => {
    try {
        dispatch({ type: 'CHANGE_LOADING', value: true })
        const res = await Axios.post(API_URL + '/kpr', {
            id: data.id,
            formkredit: data.fkpr,
            ektp: data.ktp,
            slip: data.slip,
            rk: data.rk,
            foto: data.foto,
            status: 0
        }, Header)
        dispatch({ type: 'CHANGE_LOADING', value: false })
        return Promise.resolve(res.data)
      } catch (error) {
        return Promise.reject(error)
      }
}

export const getInfo = () => async (dispatch) => {
    try {
        dispatch({ type: 'CHANGE_LOADING', value: true })
        const res = await Axios.get(API_URL + '/info')
        console.log(res)
        dispatch({ type: 'CHANGE_LOADING', value: false })
        // dispatch({ type: 'GET_RUMAH', value: res.data })
        return Promise.resolve(res.data)
    } catch (error) {
        return Promise.reject(error)
    }
}
