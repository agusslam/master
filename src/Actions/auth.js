// import AuthService from '../AuthService/auth.service'
import Axios from 'axios'
import Cookies from 'universal-cookie'
import jwt from 'jsonwebtoken'

const cookies = new Cookies()


const API_URL = 'https://apiauthv1.herokuapp.com'

export const loginUserAPI = (data) => async (dispatch) => {
  try {
    dispatch({ type: 'CHANGE_LOADING', value: true })
    const res = await Axios.post(API_URL + '/user/auth', {username: data.username,password: data.password})
    dispatch({ type: 'CHANGE_LOADING', value: false })
    dispatch({ type: 'CHANGE_LOGIN', value: true })
    // console.log(res.data)
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

// export const loginUserAPI = (data) => (dispatch) => {
//   return new Promise((resolve, reject) => {
//     dispatch({ type: 'CHANGE_LOADING', value: true })
//     Axios.post(API_URL + '/user/auth', {
//       username: data.username,
//       password: data.password
//     })
//       .then(function (response) {
//         // console.log(response);        
//         dispatch({ type: 'CHANGE_LOADING', value: false })
//         dispatch({ type: 'CHANGE_LOGIN', value: true })
//         // dispatch({ type: 'CHANGE_USER', value: dataUser })
//         cookies.set('_tKJKASKHDS', response.data.token)
//         resolve(true)
//       })
//       .catch(function (error) {
//         console.log(error);
//         dispatch({ type: 'CHANGE_LOADING', value: false })
//         dispatch({ type: 'CHANGE_LOGIN', value: false })
//         reject(false)
//       })
//   })
// }

export const logout = () => (dispatch) => {
  cookies.remove("_tKJKASKHDS")
  dispatch({ type: 'LOGOUT' })
}