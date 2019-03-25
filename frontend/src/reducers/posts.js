import { RECEIVE_POSTS, VOTE_POSTS, RECEIVE_POSTS_CATEGORIES } from '../actions/posts'

export default function posts (state = {}, action) {
  switch(action.type) {
    case RECEIVE_POSTS :
      return {
        ...state,
        ...action.posts
      }
    case VOTE_POSTS :
      return {
        ...state,
        ...action.id,
      }
    case RECEIVE_POSTS_CATEGORIES :
      console.log('action' + action.postsPerCategory)
      return {
        ...state,
        ...action.postsPerCategory
      }
    default :
      return state
  }
} 