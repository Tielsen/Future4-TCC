import axios from "axios";
import {routes} from "../containers/Router/Router";
import { push } from "connected-react-router";

export const setPositionNav = positionNav => ({
  type: 'SET_POSITIONNAV',
  payload: positionNav
})

export const setPositionImage = positionImage => ({
  type: 'SET_POSITIONIMAGE',
  payload: positionImage
})

export const login = (email, password) => async (dispatch) => {
  const data = {
    email,
    password
  }
  try{
    const response = await axios.get('http://localhost:5000/login', data)
    localStorage.setItem('token', response.token)
    dispatch(push(routes.home))
  }catch (e) {
    console.log(e)
  }

}

export const signUp = data => async (dispatch) => {
  try {
    await axios.get('http://localhost:5000/login', data)
    dispatch(push(routes.login))
  }catch (e) {
    console.log(e)
  }
}