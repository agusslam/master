// import AuthService from '../AuthService/auth.service'
import Axios from 'axios'
import Cookies from 'universal-cookie'
import jwt from 'jsonwebtoken'

const cookies = new Cookies()
const token = cookies.get('_tKJKASKHDS')

const API_URL = 'https://apiauthv1.herokuapp.com'
// const API_URL = 'http://localhost:8008'
const Header = { headers: { Authorization: `Bearer ${token}` } }

export const loginUserAPI = (data) => async (dispatch) => {
  try {
    dispatch({ type: 'CHANGE_LOADING', value: true })
    const res = await Axios.post(API_URL + '/user/auth', {username: data.username,password: data.password})
    dispatch({ type: 'CHANGE_LOADING', value: false })
    dispatch({ type: 'CHANGE_LOGIN', value: true })
    console.log(res.data)
    if(res.data.status === 200){
      const aku = jwt.decode(res.data.token)
      const userData = {
        message: res.data.message,
        status: res.data.status,
        token: res.data.token,
        role: aku.role
      }
      cookies.set('_tKJKASKHDS', res.data.token)
      return Promise.resolve(userData)
    }else{
      return Promise.reject(false)
    }    
  } catch (error) {
    return Promise.reject(error)
  }
}

export const registerUserAPI = (data) => async (dispatch) => {
  try {
    dispatch({ type: 'CHANGE_LOADING', value: true })
    const res = await Axios.post(API_URL + '/user/register', {
      username: data.username,
      password: data.password,
      nama: data.nama,
      email: data.email,
      phone: data.phone,
    })
    dispatch({ type: 'CHANGE_LOADING', value: false })
    dispatch({ type: 'CHANGE_LOGIN', value: true })
    return Promise.resolve(res.data)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getDebtInfo = () => async (dispatch) => {
  try {
    dispatch({ type: 'CHANGE_LOADING', value: true })
    const res = await Axios.get(API_URL + '/user/profile', Header)
    dispatch({ type: 'CHANGE_LOADING', value: false })
    dispatch({ type: 'GET_INFODEBITUR', value: res.data })
    return Promise.resolve(res.data)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const logout = () => (dispatch) => {
  cookies.remove("_tKJKASKHDS", { path: '/' })  
  dispatch({ type: 'LOGOUT' })
}