import Axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()
const token = cookies.get('_tKJKASKHDS')

const API_URL = 'https://apiauthv1.herokuapp.com'
const Header = { headers: { Authorization: `Bearer ${token}` } }

export const FlagStatus = (data) => async (dispatch) => {
    try {
        dispatch({ type: 'CHANGE_LOADING', value: true })
        const res = await Axios.post(API_URL + '/kpr/flag', { 
            id: data.id,
            pengajuan: data.pengajuan,
            administrasi: data.administrasi,
            aksep: data.aksep,
            slik: data.slik,
            legal: data.legal,
            komite: data.komite,
            setuju: data.setuju
        }, Header)
        dispatch({ type: 'CHANGE_LOADING', value: false })
        return Promise.resolve(res.data)
    } catch (error) {
        return Promise.reject(error)
    }
} 

export const getDataDebt = (data) => async (dispatch) => {
    try {
        dispatch({ type: 'CHANGE_LOADING', value: true })
        const res = await Axios.get(API_URL + '/info/'+data, Header)
        dispatch({ type: 'CHANGE_LOADING', value: false })
        dispatch({ type: 'GET_DATADEBITUR', value: res.data })
        // console.log(res.data.result.pengajuan[0].status)
        dispatch({ type: 'CHANGE_PENGAJUANSTEP', value: res.data.result.pengajuan[0].status })
        dispatch({ type: 'CHANGE_ADMINSTEP', value: res.data.result.administrasi[0].status })
        dispatch({ type: 'CHANGE_AKSEPSTEP', value: res.data.result.aksep[0].status })
        dispatch({ type: 'CHANGE_SLIKSTEP', value: res.data.result.slik[0].status })
        dispatch({ type: 'CHANGE_LEGALSTEP', value: res.data.result.legal[0].status })
        dispatch({ type: 'CHANGE_KOMITESTEP', value: res.data.result.komite[0].status })
        dispatch({ type: 'CHANGE_SETUJUSTEP', value: res.data.result.setuju[0].status })
        return Promise.resolve(res.data)
    } catch (error) {
        return Promise.reject(error)
    }
} 