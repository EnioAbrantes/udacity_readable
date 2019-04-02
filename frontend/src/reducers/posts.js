import { RECEIVE_POSTS, VOTE_POSTS, RECEIVE_POSTS_CATEGORIES, ADD_POST } from '../actions/posts'

export default function posts (state = {}, action) {
  switch(action.type) {
    case RECEIVE_POSTS :
      return {
        ...state,
        ...action.posts
      }
    case VOTE_POSTS :
      console.log("votee" + action.option)
      return {
        ...state
      }
    case RECEIVE_POSTS_CATEGORIES :
      console.log('action' + action.postsPerCategory)
      return {
        ...action.postsPerCategory,
      }
    case ADD_POST :
      const { post } = action

      return {
        ...state,
        ...action.post,
      }  
    default :
      return state
  }
} 
