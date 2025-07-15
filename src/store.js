export const initialStore = () => {
  return {
    people: [],
    planets: [],
    vehicles: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'get_people':

      return {
        ...store,
        people: action.payload
      };

    case 'get_planets':

      return {
        ...store,
        planets: action.payload
      }

    case 'get_vehicles':

      return {
        ...store,
        vehicles: action.payload
      }

    default:
      throw Error('Unknown action.');
  }
}
