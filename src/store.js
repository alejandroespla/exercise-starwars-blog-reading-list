export const initialStore = () => {
  return {
    people: [],
    planets: [],
    vehicles: [],
    favorites: []
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
    
    case "toggle_favorite":
  const exists = store.favorites.some(
    fav => fav.uid === action.payload.uid && fav.type === action.payload.type
  );

  const updatedFavorites = exists
    ? store.favorites.filter(
        fav => !(fav.uid === action.payload.uid && fav.type === action.payload.type)
      )
    : [...store.favorites, action.payload];

  return {
    ...store,
    favorites: updatedFavorites
  };

  case "remove_favorite":
  return {
    ...state,
    favorites: state.favorites.filter(
      fav => !(fav.uid === action.payload.uid && fav.type === action.payload.type)
    )
  };

    default:
      throw Error('Unknown action.');
  }
}
