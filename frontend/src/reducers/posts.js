import { RECEIVE_POSTS, VOTE_POSTS, RECEIVE_POSTS_CATEGORIES, ADD_POST, REMOVE_POST } from '../actions/posts'

export default function posts (state = {}, action) {
  switch(action.type) {
    case RECEIVE_POSTS :
      return {
        ...state,
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
    case REMOVE_POST:
      return Object.values(state).filter(post => post.id !== action.id)
    default :
      return state
  }
} 
