import { RECEIVE_POSTS, VOTE_POSTS, RECEIVE_POSTS_CATEGORIES, ADD_POST, EDIT_POST, REMOVE_POST, ORDER_POST, RECEIVE_SPECIFIC_POST } from '../actions/posts'

export default function posts (state = {}, action) {
  switch(action.type) {
    case RECEIVE_POSTS :
      return {
        ...action.posts
      }
    case VOTE_POSTS :
      return Object.values(state).map((post) => (
        post.id === action.post.id? action.post : post
      ))
    case RECEIVE_POSTS_CATEGORIES :
      return {
        ...action.postsPerCategory,
      }
    case ADD_POST :
      return {
        ...state,
      }  
    case EDIT_POST :
      return {
        ...state,
      }
    case RECEIVE_SPECIFIC_POST :
      return action.post
    case ORDER_POST :
      return {
        ...action.posts,
      }  
    case REMOVE_POST:
      return Object.values(state).filter(post => post.id !== action.id)
    default :
      return state
  }
} 
