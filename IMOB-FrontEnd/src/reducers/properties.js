const initialState = {
      details: {
            image: []
      },
      spotlight: [],
}

export const properties = (state = initialState, action) => {
      switch (action.type) {
            case "SET_DETAILS":
                  const details = action.payload
                  return {...state, details}
            case "SET_SPOTLIGHT":
                  const spotlight = action.payload
                  return {...state, spotlight}
            default:
                  return state
      }

}
