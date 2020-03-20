import axios from 'axios'
import {getToken} from '../utils/token'

const setDetails = details => ({
  type: 'SET_DETAILS',
  payload: {
    details
  }
})

const setSpotlight = spotlight => ({
  type: 'SET_SPOTLIGHT',
  payload: {
    spotlight
  }
})

const setRents = rents => ({
  type: 'SET_SPOTLIGHT',
  payload: {
    rents
  }
})

const setSales = sales => ({
  type: 'SET_SPOTLIGHT',
  payload: {
    sales
  }
})

export const getDetails = id => async (dispatch) => {
  const response = await axios.get(`http://localhost:5000//get_Property/${id}`, {
  })

  dispatch(setDetails(response.data.posts))
}

export const getSpotlight = () => async (dispatch) => {
  const response = await axios.get('http://localhost:5000/feed_spotlight', {
  })

  dispatch(setSpotlight(response.data.spotlight))
}

export const getRents = () => async (dispatch) => {
  const response = await axios.get('http://localhost:5000/feed_Rent', {
  })

  dispatch(setRents(response.data.rents))
}

export const getSales = () => async (dispatch) => {
  const response = await axios.get('http://localhost:5000/feed_Sale', {
  })

  dispatch(setSales(response.data.sales))
}
