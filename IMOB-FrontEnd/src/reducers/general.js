const initialState = {
      positionNav: 0,
      positionImage: 1,
}

export const general = (state = initialState, action) => {
      switch (action.type) {
            case "SET_POSITIONNAV":
                  return {...state, positionNav: action.payload}
            case "SET_POSITIONIMAGE":
                  return {...state, positionImage: action.payload}
            default:
                  return state
      }

}
