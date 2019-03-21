import { RECEIVE_CATEGORIES } from '../actions/categories'

export default function categories (state = {}, action) {
  switch(action.type) {
    case RECEIVE_CATEGORIES :
      return {
        ...state,
        ...action.name,
        ...action.path,
      }
    default :
      return state
  }
} 