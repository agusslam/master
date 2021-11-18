import Axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()
const token = cookies.get('_tKJKASKHDS')

const API_URL = 'https://apiauthv1.herokuapp.com'
const Header = { headers: { Authorization: `Bearer ${token}` } }

export const getRumah = () => async (dispatch) => {
    try {
        dispatch({ type: 'CHANGE_LOADING', value: true })
        const res = await Axios.get(API_URL + '/user', Header)
        dispatch({ type: 'CHANGE_LOADING', value: false })
        dispatch({ type: 'GET_RUMAH', value: res.data })
        return Promise.resolve(res.data)
    } catch (error) {
        return Promise.reject(error)
    }
}
