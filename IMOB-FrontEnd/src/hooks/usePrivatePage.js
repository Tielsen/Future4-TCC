import {getToken} from '../utils/token'
import {ROUTES} from '../containers/Router/Router'
import {
  useHistory
} from "react-router-dom"

export const usePrivatePage = () => {
  const history = useHistory()

  const token = getToken()

  if (!token) {
    history.push(ROUTES.signup)
  }
}
